import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CallButton, OrderButton } from "@/components/Cta";
import { TrustBar } from "@/components/sections/TrustBar";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { LocationSection } from "@/components/sections/LocationSection";
import { business, images } from "@/lib/site";

const title = "Về Chúng Tôi | Cửa Hàng Hoa Tươi Vũng Tàu";
const description =
  "Cửa Hàng Hoa Tươi Vũng Tàu — hoa đẹp, hoa tươi, thiết kế theo yêu cầu và giao đúng hẹn. 4.8/5 từ 140 đánh giá khách hàng.";

export const Route = createFileRoute("/ve-chung-toi")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/ve-chung-toi" },
    ],
    links: [{ rel: "canonical", href: "/ve-chung-toi" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:py-16 lg:grid-cols-2">
          <div className="animate-fade-up">
            <p className="eyebrow">Về chúng tôi</p>
            <h1 className="mt-3 font-display text-3xl leading-tight md:text-5xl">
              Một địa chỉ hoa tươi uy tín tại Vũng Tàu
            </h1>
            <p className="mt-5 text-sm text-muted-foreground md:text-base">
              {business.name} nhận đặt hoa cho sinh nhật, khai trương, chúc mừng, chia buồn và sự
              kiện. Hoa đẹp, hoa tươi, thiết kế theo yêu cầu và giao đúng hẹn — khách hàng có thể
              xem ảnh mẫu hoa thực tế trước khi shop giao.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton location="about_hero" />
              <OrderButton location="about_hero" label="NHẬN BÁO GIÁ" />
            </div>
          </div>
          <img
            src={images.cuaHang}
            alt="Không gian bên trong cửa hàng hoa tươi tại Vũng Tàu"
            loading="lazy"
            decoding="async"
            className="aspect-4/3 w-full rounded-3xl object-cover shadow-lift"
          />
        </div>
      </section>

      <TrustBar />

      <section className="section-y">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          {[
            {
              t: "Hoa tươi mỗi ngày",
              d: "Hoa được lựa chọn và thiết kế chỉn chu cho từng đơn hàng.",
            },
            {
              t: "Thiết kế theo yêu cầu",
              d: "Linh hoạt về kiểu dáng, tone màu, kích thước và ngân sách.",
            },
            {
              t: "Nhận đơn số lượng lớn",
              d: "Phù hợp với hội nghị, sự kiện và đơn hàng doanh nghiệp.",
            },
          ].map((c) => (
            <article key={c.t} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <h2 className="font-display text-xl">{c.t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </article>
          ))}
        </div>
      </section>

      <Gallery />
      <Reviews />
      <LocationSection />
    </SiteLayout>
  );
}
