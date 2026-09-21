import { useState, useEffect } from "react";

type NavItem = { label: string; href: string };

interface Props {
  nav: NavItem[];
  email: string;
}

export default function MobileNav({ nav, email }: Props) {
  const [open, setOpen] = useState(false);

  // lock scroll while the sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-grey-05 active:scale-95 transition"
      >
        <span className="relative block h-3.5 w-5">
          <span
            className="absolute left-0 h-0.5 w-5 bg-ink transition-all duration-200"
            style={{ top: open ? "6px" : "0", transform: open ? "rotate(45deg)" : "none" }}
          />
          <span
            className="absolute left-0 top-1.5 h-0.5 w-5 bg-ink transition-opacity duration-200"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="absolute left-0 h-0.5 w-5 bg-ink transition-all duration-200"
            style={{ top: open ? "6px" : "12px", transform: open ? "rotate(-45deg)" : "none" }}
          />
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 top-[72px] z-40 bg-paper">
          <nav className="wrap flex flex-col gap-2 pt-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="h-display text-4xl py-3 border-b border-grey-10"
              >
                {item.label}
              </a>
            ))}
            <a href="/contact" className="btn btn-primary mt-6 self-start">
              Get in touch <span className="arw">→</span>
            </a>
            <a href={`mailto:${email}`} className="label mt-8">
              {email}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
