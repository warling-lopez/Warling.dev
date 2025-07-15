"use client";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const orden = searchParams.get("orden"); // por ejemplo, "4132"

  const ordenNumerico = orden?.split('').map(Number); // [4, 1, 3, 2]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Orden personalizado</h1>
      {ordenNumerico?.map((n) => (
        <section key={n} className="mb-4 p-4 bg-gray-100 rounded">
          <h2 className="text-lg font-semibold">Sección {n}</h2>
          {/* Aquí puedes renderizar los componentes reales según el número */}
        </section>
      ))}
    </div>
  );
}
