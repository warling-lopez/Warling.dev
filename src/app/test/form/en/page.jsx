"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

// NOTE: This component assumes the following libraries are globally loaded
// in your index.html file, as they were in the original HTML:
// - Tailwind CSS
// - Lucide Icons (lucide)
// - PDF.js (pdfjsLib)
// - Draggabilly
// - Signature Pad

const DigitalFormsPro = () => {
  const router = useRouter();

  const [currentView, setCurrentView] = useState("dashboard"); // 'dashboard', 'editor', 'filler'
  const [templates, setTemplates] = useState([
    { id: 1, name: "Service Agreement.pdf", date: "01/08/2025", fields: [] },
    { id: 2, name: "Informed Consent.pdf", date: "28/07/2025", fields: [] },
  ]);
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showSignatureModal, setShowSignatureModal] = useState(false);
  const [shareLink, setShareLink] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const signaturePadRef = useRef(null);
  const draggiesRef = useRef([]);
  const pdfCanvasRef = useRef(null);
  const shareLinkInputRef = useRef(null);
  const signatureCanvasRef = useRef(null);

  useEffect(() => {
    // Initializes Lucide icons when the component mounts
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [currentView, showShareModal]); // Re-runs if the view changes to render new icons

  const renderPdf = (url) => {
    if (!pdfCanvasRef.current || !window.pdfjsLib) return;

    window.pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js";
    const loadingTask = window.pdfjsLib.getDocument(url);

    loadingTask.promise.then((pdf) => {
      pdf.getPage(1).then((page) => {
        const scale = 1.5;
        const viewport = page.getViewport({ scale });
        const canvas = pdfCanvasRef.current;
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };
        page.render(renderContext);
      });
    });
  };

  const initDraggables = () => {
    if (!window.Draggabilly) return;

    // Clears previous instances
    draggiesRef.current.forEach((d) => d.destroy());
    draggiesRef.current = [];

    const fields = document.querySelectorAll(".draggable-field");
    fields.forEach((fieldElem) => {
      const draggie = new window.Draggabilly(fieldElem, { handle: ".handle" });

      draggie.on("dragEnd", () => {
        const id = parseInt(fieldElem.id.split("-")[1]);
        setCurrentTemplate((prevTemplate) => {
          const updatedFields = prevTemplate.fields.map((f) => {
            if (f.id === id) {
              return { ...f, x: draggie.position.x, y: draggie.position.y };
            }
            return f;
          });
          return { ...prevTemplate, fields: updatedFields };
        });
      });
      draggiesRef.current.push(draggie);
    });
  };

  useEffect(() => {
    if (currentView === "editor" && currentTemplate) {
      renderPdf(
        currentTemplate.fileUrl ||
          "https://raw.githubusercontent.com/mozilla/pdf.js-sample-files/master/tracemonkey.pdf"
      );
      initDraggables();
    }
    // Cleanup function to destroy draggies when the view changes
    return () => {
      draggiesRef.current.forEach((d) => d.destroy());
      draggiesRef.current = [];
    };
  }, [currentView, currentTemplate]);

  useEffect(() => {
    if (currentView === "editor") {
      initDraggables();
    }
  }, [currentTemplate?.fields]);

  useEffect(() => {
    if (
      showSignatureModal &&
      signatureCanvasRef.current &&
      window.SignaturePad
    ) {
      const canvas = signatureCanvasRef.current;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      signaturePadRef.current = new window.SignaturePad(canvas, {
        backgroundColor: "rgb(255, 255, 255)",
      });
    }
  }, [showSignatureModal]);

  const showSuccessMessage = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const handlePdfUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      const newTemplate = {
        id: templates.length + 1,
        name: file.name,
        date: new Date().toLocaleDateString("en-US"),
        fields: [],
        fileUrl: URL.createObjectURL(file),
      };
      setTemplates([newTemplate, ...templates]);
      editTemplate(newTemplate);
      showSuccessMessage();
    }
  };

  const editTemplate = (templateOrId) => {
    const template =
      typeof templateOrId === "number"
        ? templates.find((t) => t.id === templateOrId)
        : templateOrId;
    setCurrentTemplate(template);
    setCurrentView("editor");
  };

  const addField = (type) => {
    const newField = {
      id: Date.now(),
      type,
      x: 20,
      y: 20,
      width: type === "signature" ? 200 : type === "checkbox" ? 20 : 150,
      height: type === "checkbox" ? 20 : 40,
    };
    setCurrentTemplate((prev) => ({
      ...prev,
      fields: [...prev.fields, newField],
    }));
  };

  const removeField = (indexToRemove) => {
    setCurrentTemplate((prev) => ({
      ...prev,
      fields: prev.fields.filter((_, index) => index !== indexToRemove),
    }));
  };

  const openShareModal = (template) => {
    setCurrentTemplate(template);
    setShareLink(`https://your-app.com/form/${template.id}/${Date.now()}`);
    setShowShareModal(true);
  };

  const copyShareLink = () => {
    if (shareLinkInputRef.current) {
      shareLinkInputRef.current.select();
      try {
        document.execCommand("copy");
        showSuccessMessage();
      } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
      }
    }
  };

  const previewForm = () => {
    setShowShareModal(false);
    setCurrentView("filler");
  };

  const openSignatureModal = () => {
    setShowSignatureModal(true);
  };

  const clearSignature = () => {
    signaturePadRef.current?.clear();
  };

  const saveSignature = () => {
    if (signaturePadRef.current?.isEmpty()) {
      alert("Please provide a signature.");
    } else {
      setShowSignatureModal(false);
      showSuccessMessage();
    }
  };

  const submitForm = () => {
    console.log("Form submitted with data:", currentTemplate.fields);
    showSuccessMessage();
    setCurrentView("dashboard");
  };

  return (
    <div
      id="app"
      className="flex flex-col h-screen font-sans bg-gray-50 antialiased"
    >
      <header className="bg-white border-b border-gray-200 shadow-sm z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <svg
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h1 className="text-xl font-bold text-gray-800">
                Digital Forms Pro
              </h1>
            </div>
            <div>
              <button onClick={() => router.push("/test/form")}>ES</button>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, Small Business
              </span>
              <img
                className="h-9 w-9 rounded-full"
                src="https://placehold.co/100x100/e2e8f0/475569?text=SB"
                alt="Avatar"
              />
            </div>
          </div>
        </div>
      </header>

      {currentView === "dashboard" && (
        <main id="dashboard-view" className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Dashboard
              </h2>
              <label
                htmlFor="pdf-upload-input"
                className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <i data-lucide="upload" className="mr-2 h-5 w-5"></i>
                Upload New PDF
              </label>
              <input
                type="file"
                id="pdf-upload-input"
                className="hidden"
                onChange={handlePdfUpload}
                accept="application/pdf"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  <a
                    href="#"
                    className="border-blue-500 text-blue-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                    aria-current="page"
                  >
                    My Templates
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  >
                    Received Submissions
                  </a>
                </nav>
              </div>
              <ul className="divide-y divide-gray-200 mt-4">
                {templates.map((template) => (
                  <li
                    key={template.id}
                    className="py-4 flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-4">
                      <i
                        data-lucide="file-text"
                        className="h-6 w-6 text-gray-400"
                      ></i>
                      <div>
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {template.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          Uploaded on {template.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => editTemplate(template.id)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                      >
                        <i data-lucide="edit" className="mr-1 h-4 w-4"></i>Edit
                      </button>
                      <button
                        onClick={() => openShareModal(template)}
                        className="text-green-600 hover:text-green-800 text-sm font-medium flex items-center"
                      >
                        <i data-lucide="share-2" className="mr-1 h-4 w-4"></i>
                        Share
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <i data-lucide="more-vertical" className="h-5 w-5"></i>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      )}

      {currentView === "editor" && currentTemplate && (
        <div id="editor-view" className="flex-1 flex flex-col overflow-hidden">
          <div className="bg-white border-b border-gray-200 py-3 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <button
              onClick={() => setCurrentView("dashboard")}
              className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              <i data-lucide="arrow-left" className="mr-2 h-4 w-4"></i>
              Back to Dashboard
            </button>
            <div className="text-lg font-semibold text-gray-800">
              {currentTemplate.name}
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => openShareModal(currentTemplate)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
              >
                <i data-lucide="share-2" className="mr-2 h-4 w-4"></i>
                Share
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                <i data-lucide="save" className="mr-2 h-4 w-4"></i>
                Save Template
              </button>
            </div>
          </div>
          <div className="flex-1 flex overflow-hidden">
            <aside className="w-64 bg-gray-50 p-6 border-r border-gray-200 overflow-y-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Add Fields
              </h3>
              <div className="space-y-3">
                <div
                  onClick={() => addField("text")}
                  className="flex items-center p-3 rounded-lg bg-white border border-gray-200 cursor-pointer hover:bg-gray-100 hover:border-blue-500 transition-all"
                >
                  <i
                    data-lucide="type"
                    className="h-5 w-5 text-gray-500 mr-3"
                  ></i>
                  <span className="font-medium text-gray-700">Text Field</span>
                </div>
                <div
                  onClick={() => addField("date")}
                  className="flex items-center p-3 rounded-lg bg-white border border-gray-200 cursor-pointer hover:bg-gray-100 hover:border-blue-500 transition-all"
                >
                  <i
                    data-lucide="calendar"
                    className="h-5 w-5 text-gray-500 mr-3"
                  ></i>
                  <span className="font-medium text-gray-700">Date</span>
                </div>
                <div
                  onClick={() => addField("checkbox")}
                  className="flex items-center p-3 rounded-lg bg-white border border-gray-200 cursor-pointer hover:bg-gray-100 hover:border-blue-500 transition-all"
                >
                  <i
                    data-lucide="check-square"
                    className="h-5 w-5 text-gray-500 mr-3"
                  ></i>
                  <span className="font-medium text-gray-700">Checkbox</span>
                </div>
                <div
                  onClick={() => addField("signature")}
                  className="flex items-center p-3 rounded-lg bg-white border border-gray-200 cursor-pointer hover:bg-gray-100 hover:border-blue-500 transition-all"
                >
                  <i
                    data-lucide="pen-tool"
                    className="h-5 w-5 text-gray-500 mr-3"
                  ></i>
                  <span className="font-medium text-gray-700">Signature</span>
                </div>
              </div>
            </aside>
            <main className="flex-1 bg-gray-100 p-8 overflow-auto flex justify-center">
              <div id="pdf-container" className="relative">
                <canvas
                  ref={pdfCanvasRef}
                  id="pdf-render"
                  style={{
                    boxShadow:
                      "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                  }}
                ></canvas>
                {currentTemplate.fields.map((field, index) => (
                  <div
                    key={field.id}
                    id={`field-${field.id}`}
                    className="draggable-field"
                    style={{
                      top: `${field.y}px`,
                      left: `${field.x}px`,
                      width: `${field.width}px`,
                      height: `${field.height}px`,
                    }}
                  >
                    <div className="handle">
                      <i data-lucide="move" className="h-3 w-3"></i>
                    </div>
                    <div className="w-full h-full flex items-center justify-center text-sm text-blue-800">
                      {field.type === "text" && <span>Text</span>}
                      {field.type === "date" && <span>Date</span>}
                      {field.type === "checkbox" && (
                        <div className="w-4 h-4 border-2 border-blue-400"></div>
                      )}
                      {field.type === "signature" && <span>Sign here</span>}
                    </div>
                    <div className="resizable-handle"></div>
                    <button
                      onClick={() => removeField(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      )}

      {currentView === "filler" && currentTemplate && (
        <div id="filler-view" className="flex-1 flex flex-col bg-gray-100">
          <header className="bg-white shadow-sm">
            <div className="max-w-4xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">
                Fill: {currentTemplate.name}
              </h2>
              <button
                onClick={() => setCurrentView("dashboard")}
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Close
              </button>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 flex justify-center">
            <div
              id="filler-pdf-container"
              className="relative bg-white p-4 rounded-lg shadow-lg"
            >
              <img
                src="https://placehold.co/800x1131/ffffff/000000?text=Example+Form"
                className="max-w-full h-auto"
                alt="Example form"
              />
              {currentTemplate.fields.map((field) => (
                <div
                  key={field.id}
                  style={{
                    position: "absolute",
                    top: `${field.y}px`,
                    left: `${field.x}px`,
                    width: `${field.width}px`,
                    height: `${field.height}px`,
                  }}
                >
                  {field.type === "text" && (
                    <input
                      type="text"
                      placeholder="Type here..."
                      className="form-element-input"
                    />
                  )}
                  {field.type === "date" && (
                    <input type="date" className="form-element-input" />
                  )}
                  {field.type === "checkbox" && (
                    <div className="flex items-center h-full">
                      <input
                        type="checkbox"
                        className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                    </div>
                  )}
                  {field.type === "signature" && (
                    <div
                      onClick={openSignatureModal}
                      className="w-full h-full bg-yellow-100 border border-yellow-400 rounded-md cursor-pointer flex items-center justify-center text-gray-500 text-sm"
                    >
                      <i data-lucide="pen-tool" className="mr-2 h-4 w-4"></i>{" "}
                      Click to sign
                    </div>
                  )}
                </div>
              ))}
            </div>
          </main>
          <footer className="bg-white border-t p-4 flex justify-end">
            <button
              onClick={submitForm}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Form
            </button>
          </footer>
        </div>
      )}

      {showShareModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-30">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Share Form</h3>
              <button onClick={() => setShowShareModal(false)}>
                <i data-lucide="x" className="h-6 w-6 text-gray-500"></i>
              </button>
            </div>
            <p className="text-gray-600 mb-4">
              Anyone with this link can fill out and submit the form.
            </p>
            <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md">
              <input
                type="text"
                readOnly
                value={shareLink}
                ref={shareLinkInputRef}
                className="bg-transparent w-full text-gray-700 focus:outline-none"
              />
              <button
                onClick={copyShareLink}
                className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600"
              >
                Copy
              </button>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={previewForm}
                className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {showSignatureModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-40">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
              Sign in the box
            </h3>
            <canvas
              ref={signatureCanvasRef}
              id="signature-canvas"
              className="border border-gray-300 rounded-md w-full h-48"
            ></canvas>
            <div className="mt-4 flex justify-end space-x-3">
              <button
                onClick={clearSignature}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Clear
              </button>
              <button
                onClick={saveSignature}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700"
              >
                Save Signature
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed top-5 right-5 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-md z-50">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline ml-2">
            Action completed successfully.
          </span>
        </div>
      )}
    </div>
  );
};

export default DigitalFormsPro;
