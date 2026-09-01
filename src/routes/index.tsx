import { createFileRoute, Link } from "@tanstack/react-router";
import heroBouquet from "@/assets/hero-bouquet.jpg";
import { CallButton, OrderButton } from "@/components/Cta";
import { SiteLayout } from "@/components/SiteLayout";
import { TrustBar } from "@/components/sections/TrustBar";
import { Reviews } from "@/components/sections/Reviews";
import { Gallery } from "@/components/sections/Gallery";
import { LeadForm } from "@/components/sections/LeadForm";
import { LocationSection } from "@/components/sections/LocationSection";
import { UrgentCta } from "@/components/sections/UrgentCta";
import { business, categories, featuredProducts, images } from "@/lib/site";
import { track } from "@/lib/track";

const title = "Hoa Tươi Vũng Tàu | Shop Hoa Tươi Giao Nhanh — 0567 804 444";
const description =
  "Shop hoa tươi Vũng Tàu: hoa sinh nhật, hoa khai trương, hoa chúc mừng, hoa chia buồn, hoa sự kiện. Thiết kế theo yêu cầu, gửi ảnh duyệt trước, giao hoa đúng hẹn.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Florist",
          name: business.name,
          image: `https://${business.website}/favicon.ico`,
          telephone: "+84567804444",
          url: `https://${business.website}`,
          address: {
            "@type": "PostalAddress",
            streetAddress: "57 Phạm Hồng Thái, Tam Thắng",
            addressLocality: "Hồ Chí Minh",
            postalCode: "790000",
            addressCountry: "VN",
          },
          areaServed: "Vũng Tàu",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "07:00",
              closes: "22:00",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: business.rating,
            reviewCount: business.reviewCount,
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

const whyUs = [
  { n: "01", t: "Hoa tươi", d: "Hoa được lựa chọn và thiết kế chỉn chu cho từng đơn hàng." },
  {
    n: "02",
    t: "Thiết kế theo yêu cầu",
    d: "Linh hoạt về kiểu dáng, tone màu, kích thước và ngân sách.",
  },
  { n: "03", t: "Gửi ảnh duyệt trước", d: "Khách hàng có thể xem mẫu hoa thực tế trước khi giao." },
  { n: "04", t: "Giao đúng hẹn", d: "Hỗ trợ giao hoa theo thời gian khách hàng yêu cầu." },
  { n: "05", t: "Nhận đơn số lượng lớn", d: "Phù hợp với hội nghị, sự kiện và đơn hàng doanh nghiệp." },
  {
    n: "06",
    t: "Tư vấn nhanh",
    d: "Liên hệ để được tư vấn mẫu hoa phù hợp với nhu cầu và ngân sách.",
  },
];

const tones = [
  { emoji: "🔴", t: "Tone đỏ", d: "Nổi bật — nhiệt huyết" },
  { emoji: "🟡", t: "Tone vàng", d: "Rực rỡ — may mắn" },
  { emoji: "💗", t: "Tone hồng", d: "Tinh tế — nhẹ nhàng" },
  { emoji: "🌿", t: "Tone xanh", d: "Hiện đại — trang nhã" },
];

const steps = [
  {
    n: "1",
    t: "Chọn mẫu hoặc nhu cầu",
    d: "Chọn mẫu hoa hoặc cho shop biết dịp bạn cần đặt hoa.",
  },
  {
    n: "2",
    t: "Tư vấn & duyệt mẫu",
    d: "Shop tư vấn kiểu hoa, tone màu và ngân sách. Gửi ảnh duyệt trước khi giao.",
  },
  {
    n: "3",
    t: "Giao hoa đúng hẹn",
    d: "Hoa được hoàn thiện và giao đến địa chỉ yêu cầu tại Vũng Tàu.",
  },
];

const eventUseCases = [
  "Khai trương cửa hàng / công ty",
  "Hội nghị",
  "Lễ kỷ niệm",
  "Tặng đối tác / khách hàng",
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="bg-gradient-hero">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:py-20 lg:grid-cols-[1.05fr_1fr]">
          <div className="animate-fade-up">
            <p className="eyebrow">Cửa hàng hoa tươi tại Vũng Tàu</p>
            <h1 className="mt-4 font-display text-[2rem] leading-[1.15] md:text-5xl lg:text-[3.4rem]">
              Hoa Tươi Vũng Tàu — Trao Hoa Đẹp, Gửi Trọn Tấm Lòng
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Hoa tươi thiết kế theo yêu cầu cho sinh nhật, khai trương, chúc mừng, sự kiện và nhiều
              dịp đặc biệt. Tư vấn nhanh, gửi ảnh duyệt trước khi giao và giao hoa đúng hẹn tại Vũng
              Tàu.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton location="hero" className="px-7 py-4 text-base" />
              <OrderButton location="hero" className="px-7 py-4 text-base" />
            </div>
            <ul className="mt-8 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              <li>★ {business.rating}/5 từ {business.reviewCount} đánh giá</li>
              <li>💐 Hoa tươi mỗi ngày</li>
              <li>🚚 Giao hoa tại Vũng Tàu</li>
              <li>📸 Gửi ảnh duyệt trước khi giao</li>
            </ul>
          </div>

          <img
            src={heroBouquet}
            alt="Bó hoa tươi tone hồng phấn và đỏ burgundy gói giấy ivory"
            width={1408}
            height={1600}
            fetchPriority="high"
            className="aspect-4/5 w-full rounded-[2rem] object-cover shadow-lift"
          />
        </div>
      </section>

      <TrustBar />

      {/* CATEGORIES */}
      <section className="section-y">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow">Dịp tặng hoa</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Bạn đang tìm hoa cho dịp nào?</h2>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <li
                key={c.to}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift"
              >
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.text}</p>
                  <Link
                    to={c.to}
                    onClick={() => track("category_click", { category: c.title })}
                    className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-primary/30 px-5 text-sm font-semibold text-primary transition-colors group-hover:bg-accent"
                  >
                    {c.cta}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section-y bg-card">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow">Mẫu hoa nổi bật</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            Mẫu hoa được khách hàng yêu thích
          </h2>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((p) => (
              <li
                key={p.name}
                className="group overflow-hidden rounded-3xl border border-border bg-background shadow-soft transition-shadow hover:shadow-lift"
              >
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="p-6">
                  <h3 className="font-display text-lg">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                  <p className="mt-3 text-sm font-semibold text-primary">Liên hệ để nhận báo giá</p>
                  <a
                    href={business.phoneHref}
                    onClick={() => track("product_inquiry_click", { product: p.name })}
                    className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gradient-primary text-sm font-semibold text-primary-foreground"
                  >
                    Đặt mẫu này
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-y">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow">Lý do lựa chọn</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            Vì sao khách hàng chọn Shop Hoa Tươi Vũng Tàu?
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w) => (
              <li key={w.n} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <span className="font-display text-2xl text-gold">{w.n}</span>
                <h3 className="mt-2 font-display text-lg">{w.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* EVENT / CORPORATE */}
      <section className="section-y bg-accent/60">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <img
            src={images.hoaSuKien}
            alt="Hoa trang trí hội nghị và sự kiện doanh nghiệp"
            loading="lazy"
            decoding="async"
            className="aspect-4/3 w-full rounded-3xl object-cover shadow-lift"
          />
          <div>
            <p className="eyebrow">Doanh nghiệp &amp; sự kiện</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              Hoa Cho Khai Trương, Hội Nghị &amp; Sự Kiện
            </h2>
            <p className="mt-5 text-sm text-muted-foreground md:text-base">
              Từ những lẵng hoa nhỏ gọn, thanh lịch đến các mẫu cao lớn, nổi bật — shop linh hoạt
              thiết kế theo không gian, tone màu và ngân sách của từng sự kiện.
            </p>
            <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
              {eventUseCases.map((u) => (
                <li key={u} className="rounded-xl bg-card px-4 py-3 shadow-soft">
                  {u}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <OrderButton
                location="event_section"
                label="NHẬN TƯ VẤN & BÁO GIÁ"
                className="bg-gradient-primary text-primary-foreground border-transparent hover:opacity-95"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Nhận đơn số lượng lớn • Thiết kế theo yêu cầu • Giao đúng hẹn tại Vũng Tàu
            </p>
          </div>
        </div>
      </section>

      {/* TONES */}
      <section className="section-y">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow">Tone màu</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Chọn tone màu hoa phù hợp</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tones.map((t) => (
              <li
                key={t.t}
                className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft"
              >
                <span className="text-2xl" aria-hidden="true">
                  {t.emoji}
                </span>
                <h3 className="mt-3 font-display text-lg">{t.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.d}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <OrderButton location="tone_section" label="Tôi muốn tư vấn tone màu" />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-y bg-card">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow">Quy trình</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Đặt hoa chỉ với 3 bước</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="rounded-3xl border border-border bg-background p-6">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-gradient-primary font-display text-lg text-primary-foreground">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-lg">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-3">
            <OrderButton
              location="how_it_works"
              className="bg-gradient-primary text-primary-foreground border-transparent"
            />
            <CallButton location="how_it_works" label="Tư vấn chọn hoa" className="bg-none bg-secondary" />
          </div>
        </div>
      </section>

      <Reviews />
      <Gallery />
      <LeadForm />
      <UrgentCta />
      <LocationSection />
    </SiteLayout>
  );
}
