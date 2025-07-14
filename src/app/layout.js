import "@/globals.css";
export const metadata = {
  title: "WarHub",
  description: "El Porfolio De Warling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" ">
        {children}
      </body>
    </html>
  );
}
