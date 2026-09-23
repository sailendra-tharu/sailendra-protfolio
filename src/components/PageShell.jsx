export default function PageShell({ title, subtitle, description = 'Thoughtful interfaces, reliable systems, and a little bit of personality in every detail.', children }) {
  return (
    <section className="page-shell page-width">
      <div className="page-heading">
        <p className="section-title">{subtitle}</p>
        <h1 className="text-3xl font-semibold text-shell sm:text-4xl lg:text-5xl">{title}</h1>
        <p>{description}</p>
      </div>
      {children}
    </section>
  )
}
