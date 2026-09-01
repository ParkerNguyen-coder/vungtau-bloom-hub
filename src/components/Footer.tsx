import { Link } from "@tanstack/react-router";
import { business, navLinks } from "@/lib/site";
import { CallButton } from "@/components/Cta";

export function Footer() {
  const quickLinks = navLinks.filter((l) => l.label !== "Về chúng tôi");

  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <h2 className="font-display text-xl">{business.name}</h2>
          <p className="mt-3 max-w-sm text-sm text-secondary-foreground/80">
            Hoa tươi cho sinh nhật, khai trương, chúc mừng, chia buồn và sự kiện.
          </p>
          <div className="mt-5">
            <CallButton location="footer" label="Gọi ngay để được tư vấn" />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase">Liên hệ</h3>
          <ul className="mt-4 space-y-2 text-sm text-secondary-foreground/85">
            <li>📍 {business.address}</li>
            <li>
              📞{" "}
              <a href={business.phoneHref} className="underline-offset-4 hover:underline">
                {business.phoneDisplay}
              </a>
            </li>
            <li>🌐 {business.website}</li>
            <li>🕒 {business.hours}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase">Liên kết nhanh</h3>
          <ul className="mt-4 grid gap-2 text-sm text-secondary-foreground/85">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="underline-offset-4 hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/15 px-4 py-5 text-center text-xs text-secondary-foreground/70">
        © {new Date().getFullYear()} {business.name}
      </div>
    </footer>
  );
}
