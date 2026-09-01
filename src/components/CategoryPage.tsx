import { CallButton, OrderButton } from "@/components/Cta";
import { LeadForm } from "@/components/sections/LeadForm";
import { LocationSection } from "@/components/sections/LocationSection";
import { Reviews } from "@/components/sections/Reviews";
import { UrgentCta } from "@/components/sections/UrgentCta";
import { track } from "@/lib/track";
import { business } from "@/lib/site";

export type CategoryProduct = {
  name: string;
  text: string;
  image: string;
  alt: string;
};

export function CategoryPage({
  eyebrow,
  title,
  intro,
  heroImage,
  heroAlt,
  bullets,
  products,
  occasion,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  bullets: string[];
  products: CategoryProduct[];
  occasion: string;
}) {
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:py-16 lg:grid-cols-2">
          <div className="animate-fade-up">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-3 font-display text-3xl leading-tight md:text-5xl">{title}</h1>
            <p className="mt-5 max-w-xl text-sm text-muted-foreground md:text-base">{intro}</p>
            <ul className="mt-6 grid gap-2 text-sm">
              {bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span aria-hidden="true" className="text-gold">
                    ✦
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton location={`category_hero_${occasion}`} />
              <OrderButton location={`category_hero_${occasion}`} label="NHẬN BÁO GIÁ" />
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              ★ {business.rating}/5 từ {business.reviewCount} đánh giá · Gửi ảnh duyệt trước khi giao
            </p>
          </div>
          <img
            src={heroImage}
            alt={heroAlt}
            width={1024}
            height={1024}
            className="aspect-4/3 w-full rounded-3xl object-cover shadow-lift"
          />
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-2xl md:text-3xl">Mẫu hoa tham khảo</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Mỗi mẫu đều có thể điều chỉnh kiểu dáng, tone màu, kích thước theo ngân sách của bạn.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <li
                key={p.name}
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift"
              >
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="p-5">
                  <h3 className="font-display text-lg">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                  <p className="mt-3 text-sm font-semibold text-primary">
                    Liên hệ để nhận báo giá
                  </p>
                  <a
                    href={business.phoneHref}
                    onClick={() =>
                      track("product_inquiry_click", { product: p.name, occasion })
                    }
                    className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gradient-primary px-5 text-sm font-semibold text-primary-foreground"
                  >
                    Đặt mẫu này
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Reviews />
      <LeadForm defaultOccasion={occasion} />
      <UrgentCta />
      <LocationSection />
    </>
  );
}
