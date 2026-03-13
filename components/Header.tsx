import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-abyss/86 backdrop-blur-md md:backdrop-blur-xl">
      <div className="shell grid min-h-20 grid-cols-[auto_1fr] items-center gap-x-4 gap-y-4 py-3 md:grid-cols-[auto_1fr_auto]">
        <a href="#top" className="flex items-center gap-3 text-lg font-semibold tracking-[-0.04em] text-mist">
          <span className="flex rounded-2xl border border-black/5 bg-white p-1.5 shadow-[0_8px_22px_rgba(0,0,0,0.12)]">
            <Image
              src="/logo.png"
              alt="MusharaqaHUB logo"
              width={44}
              height={52}
              sizes="(min-width: 640px) 48px, 44px"
              className="block h-11 w-auto sm:h-12"
            />
          </span>
          <span>
            Musharaqa<span className="text-emerald">HUB</span>
          </span>
        </a>
        <a
          href="#contact"
          className="primary-button justify-self-end px-5 py-2.5 text-sm shadow-none md:order-3"
        >
          Get in touch
        </a>
        <nav
          aria-label="Primary"
          className="col-span-2 flex items-center gap-5 overflow-x-auto pb-1 text-sm text-frost/74 md:order-2 md:col-span-1 md:justify-center md:gap-9 md:overflow-visible md:pb-0 md:text-frost/72"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition hover:text-emerald"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
