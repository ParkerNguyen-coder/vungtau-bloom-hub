import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import { SiteLayout } from "@/components/SiteLayout";
import { images } from "@/lib/site";

const title = "Hoa Chúc Mừng Vũng Tàu | Giỏ Hoa Chúc Mừng — 0567 804 444";
const description =
  "Hoa chúc mừng tại Vũng Tàu cho thăng chức, tốt nghiệp, thành công và các dịp quan trọng. Thiết kế theo yêu cầu, gửi ảnh duyệt trước khi giao.";

export const Route = createFileRoute("/hoa-chuc-mung")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/hoa-chuc-mung" },
    ],
    links: [{ rel: "canonical", href: "/hoa-chuc-mung" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <CategoryPage
        eyebrow="Hoa chúc mừng Vũng Tàu"
        title="Hoa Chúc Mừng — Gửi Lời Chúc Đúng Dịp"
        intro="Thiết kế hoa phù hợp cho những dịp chúc mừng và thành công: thăng chức, tốt nghiệp, tân gia, ký kết hợp tác. Shop tư vấn mẫu theo đối tượng nhận hoa."
        heroImage={images.hoaChucMung}
        heroAlt="Giỏ hoa chúc mừng tone trắng xanh"
        bullets={[
          "Giỏ hoa, bó hoa hoặc kệ hoa tuỳ dịp",
          "Tone màu trang nhã, phù hợp môi trường làm việc",
          "Kèm thiệp chúc mừng theo nội dung của bạn",
        ]}
        products={[
          {
            name: "Giỏ hoa chúc mừng tone xanh",
            text: "Thiết kế hiện đại, trang nhã cho dịp chúc mừng thành công.",
            image: images.hoaChucMung,
            alt: "Giỏ hoa chúc mừng tone xanh",
          },
          {
            name: "Bó hoa chúc mừng tone hồng",
            text: "Nhẹ nhàng, tinh tế, phù hợp tặng đồng nghiệp và bạn bè.",
            image: images.hoaSinhNhat,
            alt: "Bó hoa chúc mừng tone hồng",
          },
          {
            name: "Kệ hoa chúc mừng doanh nghiệp",
            text: "Mẫu cao, nổi bật cho lễ ký kết và sự kiện công ty.",
            image: images.hoaSuKien,
            alt: "Kệ hoa chúc mừng doanh nghiệp",
          },
        ]}
        occasion="Chúc mừng"
      />
    </SiteLayout>
  );
}
