const pillars = [
  {
    title: "Shariah-aligned foundation",
    description:
      "The project is rooted in participation-based principles intended to reflect real economic activity and responsible financial structuring.",
  },
  {
    title: "Institutional mindset",
    description:
      "Our positioning is built around clarity, discipline, and long-term credibility rather than speculative narratives.",
  },
  {
    title: "Technology with restraint",
    description:
      "We use technology as infrastructure, not as noise — supporting transparency, process efficiency, and scalable architecture.",
  },
  {
    title: "Built for serious counterparties",
    description:
      "MusharaqaHUB is being shaped for strategic partners, asset owners, and investors who value substance, structure, and trust.",
  },
];

export function WhySection() {
  return (
    <section className="section">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="eyebrow">Why MusharaqaHUB</p>
            <h2 className="section-title mt-4">Why MusharaqaHUB</h2>
            <div className="divider mt-6" />
            <p className="mt-6 max-w-xl text-base leading-8 text-frost/78 sm:text-lg">
              The next generation of financial infrastructure should be more
              asset-connected, more transparent, and more responsibly structured.
            </p>
            <div className="muted-panel mt-10 p-6">
              <p className="text-sm uppercase tracking-overline text-emerald/80">
                Designed for
              </p>
              <p className="mt-3 text-base leading-7 text-frost/76">
                Strategic partners, asset owners, and serious investors seeking
                disciplined participation structures rather than speculative
                narratives.
              </p>
            </div>
          </div>
          <div className="space-y-10">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="relative border-l border-line/80 pl-6 sm:pl-8"
              >
                <p className="text-xs font-semibold uppercase tracking-overline text-emerald/90">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-mist">
                  {pillar.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-frost/74">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
