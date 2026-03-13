const trustBadges = [
  "Shariah-aligned",
  "Real asset focused",
  "Compliance-oriented",
];

const positioningSignals = [
  "Structured for selected opportunities",
  "Designed for serious counterparties",
  "Built around governance discipline",
];

export function Hero() {
  return (
    <section
      id="top"
      className="section pb-24 pt-14 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24"
    >
      <div className="shell">
        <div className="section-frame grid-surface relative overflow-hidden border-white/10 bg-[#0b0d0c]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(0,255,106,0.14),transparent_24%),radial-gradient(circle_at_72%_8%,rgba(0,255,106,0.1),transparent_26%),linear-gradient(90deg,rgba(10,10,10,0.72)_0%,rgba(10,10,10,0.3)_42%,rgba(10,10,10,0.74)_100%)]" />
          <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-[linear-gradient(180deg,rgba(0,255,106,0.05),transparent_38%,rgba(0,255,106,0.025)_100%)] lg:block" />
          <div className="absolute bottom-0 right-0 hidden h-[72%] w-[42%] translate-y-8 bg-[radial-gradient(circle_at_bottom,rgba(0,255,106,0.08),transparent_58%)] lg:block" />
          <div className="relative grid gap-14 px-6 py-14 sm:px-10 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-14 lg:py-24">
            <div className="max-w-3xl lg:pr-10">
              <p className="eyebrow">Institutional Digital Asset Infrastructure</p>
              <div className="divider mt-5" />
              <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-[-0.065em] text-mist sm:text-5xl lg:text-[4.8rem] lg:leading-[0.98]">
                Shariah-compliant infrastructure for real-world asset tokenization
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-frost/80 sm:text-xl">
                MusharaqaHUB is focused on structuring participation in selected
                real economic sectors through ethical principles and
                blockchain-based infrastructure.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="primary-button">
                  Discuss partnership
                </a>
                <a href="#about" className="secondary-button">
                  Learn more
                </a>
              </div>
              <p className="mt-9 max-w-3xl text-sm leading-7 text-frost/64">
                Positioned for strategic partners, asset owners, and investors
                seeking disciplined participation architecture.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-overline text-frost/42">
                {positioningSignals.map((signal) => (
                  <span key={signal}>{signal}</span>
                ))}
              </div>
              <div className="mt-14 grid max-w-2xl gap-3 sm:grid-cols-3">
                {trustBadges.map((badge) => (
                  <div
                    key={badge}
                    className="rounded-full border border-emerald/16 bg-white/[0.025] px-5 py-4 text-sm font-medium text-frost/88"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>
            <div
              aria-hidden="true"
              className="relative hidden min-h-[420px] overflow-hidden rounded-[1.75rem] border border-emerald/10 bg-[linear-gradient(180deg,rgba(0,255,106,0.035),rgba(10,10,10,0.02)_24%,rgba(10,10,10,0.72)_100%)] lg:block"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_12%,rgba(0,255,106,0.1),transparent_28%),linear-gradient(180deg,rgba(13,17,16,0.12),rgba(10,10,10,0.86)_68%),repeating-linear-gradient(90deg,transparent_0,transparent_68px,rgba(0,255,106,0.018)_69px),repeating-linear-gradient(180deg,transparent_0,transparent_68px,rgba(0,255,106,0.018)_69px)]" />
              <div className="absolute inset-x-12 bottom-0 top-[24%] rounded-t-[10rem] border-x border-t border-emerald/10 bg-[linear-gradient(180deg,rgba(0,255,106,0.06),rgba(0,255,106,0.01))]" />
              <div className="absolute inset-x-12 bottom-0 flex items-end gap-6 opacity-55">
                {[38, 58, 82, 96].map((height, index) => (
                  <span
                    key={height}
                    className="flex-1 rounded-t-[1.5rem] border border-emerald/10 bg-[linear-gradient(180deg,rgba(0,255,106,0.12),rgba(0,255,106,0.015)_60%,rgba(10,10,10,0.9)_100%)]"
                    style={{ height: `${height}%`, opacity: 0.34 + index * 0.05 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
