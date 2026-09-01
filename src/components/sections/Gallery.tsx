import { images } from "@/lib/site";

const shots = [
  { src: images.hoaSinhNhat, alt: "Hoa sinh nhật tone hồng", label: "Hoa sinh nhật" },
  { src: images.hoaKhaiTruong, alt: "Kệ hoa khai trương tone đỏ", label: "Hoa khai trương" },
  { src: images.hoaChucMung, alt: "Giỏ hoa chúc mừng tone xanh trắng", label: "Hoa chúc mừng" },
  { src: images.hoaChiaBuon, alt: "Hoa chia buồn tone trắng", label: "Hoa chia buồn" },
  { src: images.hoaSuKien, alt: "Hoa trang trí hội nghị", label: "Hoa sự kiện" },
  { src: images.cuaHang, alt: "Không gian cửa hàng hoa tươi", label: "Không gian cửa hàng" },
];

export function Gallery() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-6xl px-4">
        <p className="eyebrow">Thư viện hình ảnh</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">Một số mẫu hoa shop đã thực hiện</h2>

        <div className="mt-10 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {shots.map((s, i) => (
            <figure
              key={s.label}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                decoding="async"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
                  i % 3 === 1 ? "aspect-3/4" : "aspect-4/5"
                }`}
              />
              <figcaption className="px-4 py-3 text-xs text-muted-foreground">{s.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
