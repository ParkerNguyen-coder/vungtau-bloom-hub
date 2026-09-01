const items = [
  { value: "4.8/5", label: "140+ đánh giá khách hàng" },
  { value: "Hoa tươi", label: "Chọn hoa và thiết kế chỉn chu" },
  { value: "Đúng hẹn", label: "Giao hoa theo thời gian yêu cầu" },
  { value: "Duyệt trước", label: "Gửi ảnh hoa trước khi giao" },
];

export function TrustBar() {
  return (
    <section aria-label="Cam kết của cửa hàng" className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4 md:py-10">
        {items.map((i) => (
          <div key={i.value} className="text-center md:text-left">
            <p className="font-display text-xl text-primary md:text-2xl">{i.value}</p>
            <p className="mt-1 text-xs text-muted-foreground md:text-sm">{i.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
