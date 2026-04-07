export default function PageShell({ title, subtitle, children }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-20 pt-12">
      <div className="mb-10 space-y-3">
        <p className="section-title">{subtitle}</p>
        <h1 className="text-3xl font-semibold text-shell sm:text-4xl lg:text-5xl">{title}</h1>
      </div>
      {children}
    </section>
  )
}
