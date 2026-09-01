import { CallButton, OrderButton } from "@/components/Cta";

export function UrgentCta() {
  return (
    <section className="section-y bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl">Cần đặt hoa gấp?</h2>
        <p className="mt-4 text-sm text-secondary-foreground/85 md:text-base">
          Gọi trực tiếp để được tư vấn nhanh về mẫu hoa và thời gian giao.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CallButton location="urgent_cta" className="w-full px-8 py-4 text-base sm:w-auto" />
          <OrderButton
            location="urgent_cta"
            label="GỬI YÊU CẦU ĐẶT HOA"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
