import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import { SiteLayout } from "@/components/SiteLayout";
import { images } from "@/lib/site";

const title = "Hoa Sự Kiện Vũng Tàu | Hoa Hội Nghị & Doanh Nghiệp — 0567 804 444";
const description =
  "Hoa sự kiện tại Vũng Tàu: hội nghị, lễ kỷ niệm, hoa tặng đối tác và đơn hàng doanh nghiệp số lượng lớn. Nhận tư vấn và báo giá theo không gian sự kiện.";

export const Route = createFileRoute("/hoa-su-kien")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/hoa-su-kien" },
    ],
    links: [{ rel: "canonical", href: "/hoa-su-kien" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <CategoryPage
        eyebrow="Hoa sự kiện Vũng Tàu"
        title="Hoa Cho Hội Nghị, Lễ Kỷ Niệm & Doanh Nghiệp"
        intro="Từ những lẵng hoa nhỏ gọn, thanh lịch đến các mẫu cao lớn, nổi bật — shop linh hoạt thiết kế theo không gian, tone màu và ngân sách của từng sự kiện."
        heroImage={images.hoaSuKien}
        heroAlt="Hoa trang trí hội nghị và sự kiện doanh nghiệp"
        bullets={[
          "Khai trương cửa hàng / công ty",
          "Hội nghị và lễ kỷ niệm",
          "Hoa tặng đối tác, khách hàng",
          "Nhận đơn số lượng lớn",
        ]}
        products={[
          {
            name: "Hoa để bàn hội nghị",
            text: "Mẫu thấp, gọn, không che tầm nhìn người tham dự.",
            image: images.hoaSuKien,
            alt: "Hoa để bàn hội nghị",
          },
          {
            name: "Kệ hoa sự kiện tone đỏ",
            text: "Mẫu cao, nổi bật cho sân khấu và khu vực lễ tân.",
            image: images.hoaKhaiTruong,
            alt: "Kệ hoa sự kiện tone đỏ",
          },
          {
            name: "Hoa tặng đối tác",
            text: "Bó hoa hoặc giỏ hoa trang nhã, phù hợp tặng khách mời.",
            image: images.hoaChucMung,
            alt: "Hoa tặng đối tác tone trắng xanh",
          },
        ]}
        occasion="Sự kiện"
      />
    </SiteLayout>
  );
}
