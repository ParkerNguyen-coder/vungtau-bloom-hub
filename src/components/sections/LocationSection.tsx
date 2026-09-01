import { business, directionsUrl, mapEmbedUrl } from "@/lib/site";
import { track } from "@/lib/track";
import { CallButton } from "@/components/Cta";

export function LocationSection() {
  return (
    <section className="section-y">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Cửa hàng</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Ghé cửa hàng hoa tại Vũng Tàu</h2>
          <ul className="mt-6 space-y-3 text-sm md:text-base">
            <li>📍 {business.address}</li>
            <li className="text-secondary">🕒 {business.hours}</li>
            <li>
              📞{" "}
              <a href={business.phoneHref} className="font-semibold text-primary">
                {business.phoneDisplay}
              </a>
            </li>
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("directions_click", { location: "location_section" })}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary/30 bg-card px-6 text-sm font-semibold text-primary hover:bg-accent"
            >
              Chỉ đường
            </a>
            <CallButton location="location_section" label="Gọi ngay" />
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
          <iframe
            title={`Bản đồ đến ${business.name}`}
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[340px] w-full md:h-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
