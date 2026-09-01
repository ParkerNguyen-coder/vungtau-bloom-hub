import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import { SiteLayout } from "@/components/SiteLayout";
import { images } from "@/lib/site";

const title = "Hoa Chia Buồn Vũng Tàu | Hoa Tang Lễ Trang Nhã — 0567 804 444";
const description =
  "Hoa chia buồn, hoa tang lễ tại Vũng Tàu với thiết kế trang nhã, lịch sự. Hỗ trợ tư vấn nhanh và giao hoa đúng thời gian tang lễ yêu cầu.";

export const Route = createFileRoute("/hoa-chia-buon")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/hoa-chia-buon" },
    ],
    links: [{ rel: "canonical", href: "/hoa-chia-buon" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <CategoryPage
        eyebrow="Hoa chia buồn Vũng Tàu"
        title="Hoa Chia Buồn — Trang Nhã Và Lịch Sự"
        intro="Thiết kế hoa chia buồn phù hợp với không gian tang lễ, tone trắng và xanh nhẹ. Shop hỗ trợ tư vấn nhanh và giao hoa đúng thời gian bạn yêu cầu."
        heroImage={images.hoaChiaBuon}
        heroAlt="Hoa chia buồn tone trắng gồm cúc và ly"
        bullets={[
          "Kệ hoa, vòng hoa và lẵng hoa tang lễ",
          "Băng chữ theo nội dung bạn cung cấp",
          "Hỗ trợ đặt gấp qua điện thoại",
        ]}
        products={[
          {
            name: "Kệ hoa chia buồn tone trắng",
            text: "Cúc trắng và ly trắng, thiết kế trang nghiêm, lịch sự.",
            image: images.hoaChiaBuon,
            alt: "Kệ hoa chia buồn tone trắng",
          },
          {
            name: "Lẵng hoa chia buồn tone trắng xanh",
            text: "Tone trắng kết hợp lá xanh, nhẹ nhàng và trang nhã.",
            image: images.hoaChucMung,
            alt: "Lẵng hoa chia buồn tone trắng xanh",
          },
        ]}
        occasion="Chia buồn"
      />
    </SiteLayout>
  );
}
