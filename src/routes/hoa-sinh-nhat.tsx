import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import { SiteLayout } from "@/components/SiteLayout";
import { images } from "@/lib/site";

const title = "Hoa Sinh Nhật Vũng Tàu | Đặt Bó Hoa Sinh Nhật — 0567 804 444";
const description =
  "Đặt hoa sinh nhật tại Vũng Tàu: bó hoa hồng, tone hồng, tone đỏ thiết kế theo yêu cầu. Gửi ảnh duyệt trước khi giao, giao hoa đúng hẹn.";

export const Route = createFileRoute("/hoa-sinh-nhat")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/hoa-sinh-nhat" },
    ],
    links: [{ rel: "canonical", href: "/hoa-sinh-nhat" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <CategoryPage
        eyebrow="Hoa sinh nhật Vũng Tàu"
        title="Hoa Sinh Nhật — Món Quà Đơn Giản Mà Ấm Áp"
        intro="Bó hoa sinh nhật dành cho người thân, bạn bè và người đặc biệt. Shop tư vấn tone màu, kích thước và ngân sách, gửi ảnh duyệt trước khi giao tại Vũng Tàu."
        heroImage={images.hoaSinhNhat}
        heroAlt="Bó hoa sinh nhật tone hồng gồm hoa hồng và baby trắng"
        bullets={[
          "Bó hoa tone hồng, đỏ, vàng hoặc mix theo yêu cầu",
          "Kèm thiệp chúc mừng viết tay",
          "Giao theo giờ hẹn trong khu vực Vũng Tàu",
        ]}
        products={[
          {
            name: "Bó hoa sinh nhật tone hồng",
            text: "Hoa hồng phấn kết baby trắng, gói giấy ivory nhẹ nhàng.",
            image: images.hoaSinhNhat,
            alt: "Bó hoa sinh nhật tone hồng",
          },
          {
            name: "Bó hoa hồng đỏ",
            text: "Hoa hồng đỏ tươi cho dịp sinh nhật của người thương.",
            image: images.hoaHongDo,
            alt: "Bó hoa hồng đỏ",
          },
          {
            name: "Giỏ hoa sinh nhật tone xanh trắng",
            text: "Thiết kế nhẹ nhàng, hiện đại, phù hợp tặng đồng nghiệp.",
            image: images.hoaChucMung,
            alt: "Giỏ hoa tone xanh trắng",
          },
        ]}
        occasion="Sinh nhật"
      />
    </SiteLayout>
  );
}
