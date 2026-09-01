import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { business, navLinks } from "@/lib/site";
import { track } from "@/lib/track";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex flex-col leading-tight" aria-label={business.name}>
          <span className="font-display text-lg font-semibold text-primary md:text-xl">
            Hoa Tươi Vũng Tàu
          </span>
          <span className="text-[11px] tracking-widest text-muted-foreground uppercase">
            Cửa hàng hoa tươi · {business.phoneDisplay}
          </span>
        </Link>

        <nav aria-label="Điều hướng chính" className="hidden lg:block">
          <ul className="flex items-center gap-5 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-foreground/80 transition-colors hover:text-primary"
                  activeProps={{ className: "text-primary font-semibold" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={business.phoneHref}
            onClick={() => track("phone_call_click", { location: "header" })}
            className="hidden items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-shadow hover:shadow-lift sm:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            Gọi ngay
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Đóng menu" : "Mở menu"}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border text-primary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Điều hướng di động" className="border-t border-border bg-card lg:hidden">
          <ul className="mx-auto grid max-w-6xl gap-1 px-4 py-3">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-sm font-medium text-foreground/90 hover:bg-accent hover:text-primary"
                  activeProps={{ className: "bg-accent text-primary" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
