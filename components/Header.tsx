const navItems = [
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-abyss/86 backdrop-blur-xl">
      <div className="shell flex min-h-20 items-center justify-between gap-6 py-2">
        <a href="#top" className="flex items-center gap-3 text-lg font-semibold tracking-[-0.04em] text-mist">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald/35 bg-emerald/8 text-xs font-semibold tracking-[0.22em] text-emerald">
            MH
          </span>
          <span>
            Musharaqa<span className="text-emerald">HUB</span>
          </span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-frost/72 transition hover:text-emerald"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="primary-button px-5 py-2.5 text-sm shadow-none">
          Get in touch
        </a>
      </div>
      <nav
        aria-label="Mobile"
        className="shell flex items-center gap-5 overflow-x-auto pb-4 md:hidden"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="whitespace-nowrap text-sm text-frost/74 transition hover:text-emerald"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
