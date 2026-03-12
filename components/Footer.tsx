const footerNav = [
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="pb-10 pt-24 sm:pb-12">
      <div className="shell">
        <div className="rounded-t-[2rem] border-t border-line/80 bg-black/30 pt-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-lg font-semibold tracking-[-0.045em] text-mist">
                Musharaqa<span className="text-emerald">HUB</span>
              </p>
              <p className="mt-3 text-base leading-7 text-frost/68">
                Shariah-compliant infrastructure for real-world asset
                participation.
              </p>
            </div>
            <nav
              aria-label="Footer"
              className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-frost/62 sm:flex-nowrap"
            >
              {footerNav.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-emerald">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-10 hairline" />
          <p className="mt-8 max-w-4xl text-xs leading-6 text-frost/48 sm:text-sm">
            The information on this website is provided for general
            informational purposes only and does not constitute an offer,
            solicitation, investment advice, or legal advice.
          </p>
          <p className="mt-7 text-sm text-frost/40">
            © MusharaqaHUB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
