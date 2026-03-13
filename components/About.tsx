const features = [
  {
    title: "Ethical by structure",
    description:
      "Built around Shariah-aligned participation logic rather than the usually speculative exposure common in comparable markets.",
  },
  {
    title: "Asset-backed by design",
    description:
      "Focused on real-world assets and real-economy use cases.",
  },
  {
    title: "Digital by infrastructure",
    description:
      "Uses modern technology to improve transparency, record-keeping, and accessibility.",
  },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="section-title mt-4">What is MusharaqaHUB</h2>
            <div className="divider mt-6" />
          </div>
          <div className="space-y-5 text-base leading-8 text-frost/78 sm:text-lg">
            <p>
              MusharaqaHUB is designed as a platform for structuring participation
              in selected real economic sectors using a Shariah-compliant
              framework.
            </p>
            <p>
              Financial participation is intended to remain connected to
              identifiable underlying assets, transparent structures, and
              clearly defined rights and obligations.
            </p>
            <p>
              The approach combines ethical finance principles, digital
              infrastructure, and disciplined transaction design.
            </p>
          </div>
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="muted-panel relative overflow-hidden p-8 sm:p-10">
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-emerald/0 via-emerald/50 to-emerald/0" />
            <div className="mb-6 h-px w-16 bg-emerald/75" />
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-mist sm:text-[1.9rem]">
              {features[0].title}
            </h3>
            <p className="mt-4 max-w-xl text-base leading-8 text-frost/74 sm:text-lg">
              {features[0].description}
            </p>
          </article>
          <div className="space-y-4">
            {features.slice(1).map((feature) => (
              <article key={feature.title} className="border-l border-line/80 pl-5 sm:pl-6">
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-mist">
                  {feature.title}
                </h3>
                <p className="mt-3 max-w-sm text-base leading-7 text-frost/74">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
