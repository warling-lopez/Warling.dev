export default function SectionLabel({ index, children }) {
  return (
    <p data-build="text" data-label="label" className="eyebrow mb-4 inline-flex items-center gap-2">
      <span className="font-semibold text-accent">{index}</span>
      <span>/ {children}</span>
    </p>
  );
}
