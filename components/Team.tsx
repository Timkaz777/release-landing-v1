const teamMembers = [
  {
    name: "Yerlan Baidaulet",
    role: "Co-Founder / Chairman",
    description:
      "Provides leadership across vision, governance, and ecosystem development.",
  },
  {
    name: "Temirkhan Konkashev",
    role: "Co-Founder / Strategy",
    description:
      "Leads strategic development, structuring, and long-term platform positioning.",
  },
  {
    name: "Renat Kudakaev",
    role: "Project Development",
    description:
      "Supports project development through domain expertise and operational execution.",
  },
  {
    name: "Vladimir Makarov",
    role: "Platform Development",
    description:
      "Contributes to execution, structuring, and platform development initiatives.",
  },
];

export function Team() {
  return (
    <section id="team" className="section">
      <div className="shell">
        <div className="px-0 py-0">
          <p className="eyebrow">Team</p>
          <h2 className="section-title mt-4">Team</h2>
          <div className="divider mt-6" />
          <p className="mt-6 max-w-3xl text-base leading-8 text-frost/78 sm:text-lg">
            MusharaqaHUB brings together a multidisciplinary perspective across
            strategy, finance, legal structuring, and execution.
          </p>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {teamMembers.map((member) => (
              <article
                key={`${member.name}-${member.role}`}
                className="muted-panel p-7 sm:p-8"
              >
                <div className="flex items-center gap-5">
                  <div
                    aria-hidden="true"
                    className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-line bg-white/[0.04] text-mist"
                  >
                    <span className="text-sm font-semibold tracking-[0.12em]">
                      {member.name
                        .split(" ")
                        .slice(0, 2)
                        .map((part) => part[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-overline text-emerald/80">
                      {member.role}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-mist">
                      {member.name}
                    </h3>
                  </div>
                </div>
                <p className="mt-5 max-w-md text-sm leading-7 text-frost/70">
                  {member.description}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-sm leading-7 text-frost/56">
            Full team information may be shared selectively depending on the
            stage of partnership discussion.
          </p>
        </div>
      </div>
    </section>
  );
}
