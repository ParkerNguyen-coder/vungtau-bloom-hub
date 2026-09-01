import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import { SiteLayout } from "@/components/SiteLayout";
import { images } from "@/lib/site";

const title = "Hoa Khai Trương Vũng Tàu | Kệ Hoa Khai Trương — 0567 804 444";
const description =
  "Kệ hoa, lẵng hoa khai trương tại Vũng Tàu cho cửa hàng, công ty, doanh nghiệp. Tone đỏ, tone vàng nổi bật, thiết kế theo yêu cầu, giao đúng giờ khai trương.";

export const Route = createFileRoute("/hoa-khai-truong")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/hoa-khai-truong" },
    ],
    links: [{ rel: "canonical", href: "/hoa-khai-truong" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <CategoryPage
        eyebrow="Hoa khai trương Vũng Tàu"
        title="Hoa Khai Trương — Nổi Bật Ngay Từ Cửa Hàng"
        intro="Lẵng hoa và kệ hoa khai trương sang trọng cho cửa hàng, công ty và doanh nghiệp. Shop thiết kế theo không gian mặt tiền, tone màu và ngân sách của bạn."
        heroImage={images.hoaKhaiTruong}
        heroAlt="Kệ hoa khai trương tone đỏ vàng đặt trước cửa hàng"
        bullets={[
          "Kệ hoa 1 tầng, 2 tầng hoặc mẫu cao theo yêu cầu",
          "Băng chữ khai trương theo nội dung của bạn",
          "Nhận đơn số lượng lớn cho doanh nghiệp",
        ]}
        products={[
          {
            name: "Lẵng hoa khai trương tone đỏ",
            text: "Tone đỏ nổi bật, phù hợp mặt tiền cửa hàng và công ty.",
            image: images.hoaKhaiTruong,
            alt: "Lẵng hoa khai trương tone đỏ",
          },
          {
            name: "Lẵng hoa khai trương tone vàng",
            text: "Tone vàng rực rỡ, mang ý nghĩa may mắn và thuận lợi.",
            image: images.hoaKhaiTruongVang,
            alt: "Lẵng hoa khai trương tone vàng",
          },
          {
            name: "Kệ hoa khai trương tone xanh trắng",
            text: "Thiết kế hiện đại, trang nhã cho showroom và văn phòng.",
            image: images.hoaChucMung,
            alt: "Kệ hoa khai trương tone xanh trắng",
          },
        ]}
        occasion="Khai trương"
      />
    </SiteLayout>
  );
}
