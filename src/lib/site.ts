import hoaSinhNhat from "@/assets/hoa-sinh-nhat.jpg";
import hoaKhaiTruong from "@/assets/hoa-khai-truong.jpg";
import hoaKhaiTruongVang from "@/assets/hoa-khai-truong-vang.jpg";
import hoaChucMung from "@/assets/hoa-chuc-mung.jpg";
import hoaChiaBuon from "@/assets/hoa-chia-buon.jpg";
import hoaSuKien from "@/assets/hoa-su-kien.jpg";
import hoaHongDo from "@/assets/hoa-hong-do.jpg";
import cuaHang from "@/assets/cua-hang.jpg";

export const business = {
  name: "Cửa Hàng Hoa Tươi Vũng Tàu",
  shortName: "Shop Hoa Tươi Vũng Tàu",
  phoneDisplay: "0567 804 444",
  phoneHref: "tel:0567804444",
  address: "57 Phạm Hồng Thái, Tam Thắng, Hồ Chí Minh 790000, Việt Nam",
  website: "shophoavungtau.com",
  hours: "Đang mở cửa · Đóng cửa lúc 22:00",
  rating: 4.8,
  reviewCount: 140,
  mapsQuery: "57+Phạm+Hồng+Thái,+Tam+Thắng,+Hồ+Chí+Minh",
};

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.mapsQuery}`;
export const mapEmbedUrl = `https://www.google.com/maps?q=${business.mapsQuery}&output=embed`;

export const navLinks = [
  { label: "Trang chủ", to: "/" },
  { label: "Hoa sinh nhật", to: "/hoa-sinh-nhat" },
  { label: "Hoa khai trương", to: "/hoa-khai-truong" },
  { label: "Hoa chúc mừng", to: "/hoa-chuc-mung" },
  { label: "Hoa chia buồn", to: "/hoa-chia-buon" },
  { label: "Hoa sự kiện", to: "/hoa-su-kien" },
  { label: "Về chúng tôi", to: "/ve-chung-toi" },
  { label: "Liên hệ", to: "/lien-he" },
] as const;

export const images = {
  hoaSinhNhat,
  hoaKhaiTruong,
  hoaKhaiTruongVang,
  hoaChucMung,
  hoaChiaBuon,
  hoaSuKien,
  hoaHongDo,
  cuaHang,
};

export const categories = [
  {
    to: "/hoa-sinh-nhat" as const,
    title: "Hoa Sinh Nhật",
    text: "Những bó hoa tươi đẹp dành cho người thân, bạn bè và người đặc biệt.",
    cta: "Xem hoa sinh nhật",
    image: hoaSinhNhat,
    alt: "Bó hoa sinh nhật tone hồng gồm hoa hồng và baby trắng",
  },
  {
    to: "/hoa-khai-truong" as const,
    title: "Hoa Khai Trương",
    text: "Lẵng hoa nổi bật, sang trọng cho cửa hàng, công ty và doanh nghiệp.",
    cta: "Xem hoa khai trương",
    image: hoaKhaiTruong,
    alt: "Kệ hoa khai trương tone đỏ vàng đặt trước cửa hàng",
  },
  {
    to: "/hoa-chuc-mung" as const,
    title: "Hoa Chúc Mừng",
    text: "Thiết kế hoa phù hợp cho những dịp chúc mừng và thành công.",
    cta: "Xem hoa chúc mừng",
    image: hoaChucMung,
    alt: "Giỏ hoa chúc mừng tone trắng xanh",
  },
  {
    to: "/hoa-chia-buon" as const,
    title: "Hoa Chia Buồn",
    text: "Thiết kế trang nhã, lịch sự và phù hợp với không gian tang lễ.",
    cta: "Xem hoa chia buồn",
    image: hoaChiaBuon,
    alt: "Hoa chia buồn tone trắng gồm cúc và ly",
  },
  {
    to: "/hoa-su-kien" as const,
    title: "Hoa Sự Kiện",
    text: "Hoa dành cho hội nghị, lễ kỷ niệm, doanh nghiệp và các sự kiện đặc biệt.",
    cta: "Tư vấn sự kiện",
    image: hoaSuKien,
    alt: "Hoa trang trí hội nghị và sự kiện doanh nghiệp",
  },
];

export const featuredProducts = [
  {
    name: "Bó hoa sinh nhật tone hồng",
    text: "Hoa hồng phấn kết baby trắng, gói giấy ivory nhẹ nhàng.",
    image: hoaSinhNhat,
    alt: "Bó hoa sinh nhật tone hồng",
  },
  {
    name: "Bó hoa hồng đỏ",
    text: "Hoa hồng đỏ tươi dành cho những dịp quan trọng và lãng mạn.",
    image: hoaHongDo,
    alt: "Bó hoa hồng đỏ gói giấy kraft",
  },
  {
    name: "Lẵng hoa khai trương tone đỏ",
    text: "Kệ hoa cao, nổi bật, phù hợp khai trương cửa hàng và công ty.",
    image: hoaKhaiTruong,
    alt: "Lẵng hoa khai trương tone đỏ",
  },
  {
    name: "Lẵng hoa khai trương tone vàng",
    text: "Tone vàng rực rỡ, mang ý nghĩa may mắn và thuận lợi.",
    image: hoaKhaiTruongVang,
    alt: "Lẵng hoa khai trương tone vàng",
  },
  {
    name: "Hoa chúc mừng tone xanh",
    text: "Thiết kế hiện đại, trang nhã cho các dịp chúc mừng thành công.",
    image: hoaChucMung,
    alt: "Giỏ hoa chúc mừng tone xanh trắng",
  },
  {
    name: "Hoa sự kiện cao cấp",
    text: "Hoa trang trí hội nghị, lễ kỷ niệm theo không gian và tone màu.",
    image: hoaSuKien,
    alt: "Hoa sự kiện cao cấp trang trí hội nghị",
  },
];

/** Reviews shown on the site. Replace with verified reviews from the business. */
export const reviews = [
  {
    text: "Shop làm việc rất uy tín. Hoa giao đến vẫn còn tươi và đẹp.",
    author: "Khách hàng Google",
  },
  {
    text: "Dịch vụ giao hoa nhanh chóng, đúng giờ hẹn. Hoa nhận được y hình.",
    author: "Khách hàng Google",
  },
  {
    text: "Mình đã đặt nhiều lần, từ hoa sinh nhật đến hoa đám tang đều rất hài lòng.",
    author: "Khách hàng Google",
  },
];

export const occasions = [
  "Sinh nhật",
  "Khai trương",
  "Chúc mừng",
  "Chia buồn",
  "Sự kiện",
  "Khác",
];

export const budgets = [
  "Dưới 500.000đ",
  "500.000đ – 1.000.000đ",
  "1.000.000đ – 2.000.000đ",
  "Trên 2.000.000đ",
  "Chưa xác định",
];
