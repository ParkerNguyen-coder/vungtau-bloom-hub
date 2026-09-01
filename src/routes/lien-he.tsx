import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CallButton } from "@/components/Cta";
import { LeadForm } from "@/components/sections/LeadForm";
import { LocationSection } from "@/components/sections/LocationSection";
import { UrgentCta } from "@/components/sections/UrgentCta";
import { business, directionsUrl } from "@/lib/site";
import { track } from "@/lib/track";

const title = "Liên Hệ Đặt Hoa | Cửa Hàng Hoa Tươi Vũng Tàu — 0567 804 444";
const description =
  "Liên hệ đặt hoa tươi tại Vũng Tàu: gọi 0567 804 444 hoặc gửi yêu cầu để nhận tư vấn mẫu hoa và báo giá nhanh. 57 Phạm Hồng Thái, Tam Thắng.";

export const Route = createFileRoute("/lien-he")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/lien-he" },
    ],
    links: [{ rel: "canonical", href: "/lien-he" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center md:py-16">
          <p className="eyebrow">Liên hệ</p>
          <h1 className="mt-3 font-display text-3xl md:text-5xl">Đặt hoa &amp; nhận báo giá</h1>
          <p className="mt-5 text-sm text-muted-foreground md:text-base">
            Gọi trực tiếp để được tư vấn nhanh nhất, hoặc gửi yêu cầu bên dưới — shop sẽ liên hệ lại
            để tư vấn mẫu hoa phù hợp.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CallButton location="contact_hero" className="w-full px-7 py-4 text-base sm:w-auto" />
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("directions_click", { location: "contact_hero" })}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-primary/30 bg-card px-6 text-sm font-semibold text-primary hover:bg-accent sm:w-auto"
            >
              Chỉ đường
            </a>
          </div>
          <ul className="mt-8 grid gap-2 text-sm text-muted-foreground">
            <li>📍 {business.address}</li>
            <li>🕒 {business.hours}</li>
            <li>🌐 {business.website}</li>
          </ul>
        </div>
      </section>

      <LeadForm />
      <UrgentCta />
      <LocationSection />
    </SiteLayout>
  );
}
