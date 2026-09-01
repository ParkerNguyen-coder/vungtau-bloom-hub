import { Star } from "lucide-react";
import { business, reviews } from "@/lib/site";
import { track } from "@/lib/track";

export function Reviews() {
  return (
    <section className="section-y bg-card">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="eyebrow">Đánh giá</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Khách hàng nói gì về chúng tôi?</h2>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3">
            <span className="font-display text-2xl text-primary">{business.rating} / 5</span>
            <span className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-gold text-gold" />
              ))}
            </span>
            <span className="text-sm text-muted-foreground">
              {business.reviewCount}+ đánh giá
            </span>
          </div>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <li
              key={r.text}
              className="rounded-3xl border border-border bg-background p-6 shadow-soft"
            >
              <span className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </span>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                “{r.text}”
              </blockquote>
              <p className="mt-4 text-xs text-muted-foreground">{r.author}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(business.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("directions_click", { location: "reviews" })}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary/30 px-6 text-sm font-semibold text-primary hover:bg-accent"
          >
            XEM THÊM ĐÁNH GIÁ
          </a>
        </div>
      </div>
    </section>
  );
}
