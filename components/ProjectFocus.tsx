const focusItems = [
  {
    title: "Real-world asset participation",
    description:
      "The platform concept is oriented toward asset classes such as real estate, intellectual property, commodities, and other selected productive assets.",
  },
  {
    title: "Shariah-compliant structuring",
    description:
      "Non-usuary transactions are intended to follow principles of fairness, asset linkage, risk sharing, and responsible financial design, as per Fatwa to be approved soon.",
  },
  {
    title: "Digital records and infrastructure",
    description:
      "Technology can support transparent ownership records, documentation flows, and operational efficiency.",
  },
  {
    title: "Cross-border relevance",
    description:
      "The long-term vision is to support participation models that can speak to investors, issuers, and strategic partners across multiple jurisdictions.",
  },
];

export function ProjectFocus() {
  return (
    <section id="project" className="section">
      <div className="shell">
        <div className="section-frame grid-surface relative overflow-hidden px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,rgba(0,255,106,0.09),transparent_55%)]" />
          <p className="eyebrow">Project Focus</p>
          <h2 className="section-title mt-4">What the project is focused on</h2>
          <div className="divider mt-6" />
          <p className="section-copy mt-6">
            MusharaqaHUB is focused on selected participation models where asset
            linkage, documentation discipline, and operational clarity matter.
          </p>
          <div className="relative mt-16 space-y-5">
            {focusItems.map((item, index) => (
              <article
                key={item.title}
                className="border-t border-line/80 py-7 first:border-t-0 first:pt-0 last:pb-0 sm:py-8 lg:grid lg:grid-cols-[120px_1fr] lg:gap-8"
              >
                <p className="text-xs font-semibold uppercase tracking-overline text-emerald/90 lg:pt-1">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="mt-4 max-w-lg text-2xl font-semibold tracking-[-0.03em] text-mist lg:mt-0">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-frost/74">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-12 max-w-3xl text-base leading-8 text-frost/72 sm:text-lg">
            The emphasis is on disciplined architecture rather than hype-driven
            financial engineering.
          </p>
        </div>
      </div>
    </section>
  );
}
