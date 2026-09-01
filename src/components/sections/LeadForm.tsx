import { useState } from "react";
import { z } from "zod";
import { budgets, occasions } from "@/lib/site";
import { track } from "@/lib/track";

const schema = z.object({
  name: z.string().trim().min(2, "Vui lòng nhập họ và tên").max(100),
  phone: z
    .string()
    .trim()
    .min(8, "Vui lòng nhập số điện thoại hợp lệ")
    .max(20)
    .regex(/^[0-9+\s().-]+$/, "Số điện thoại chỉ gồm chữ số"),
  occasion: z.string().max(50),
  budget: z.string().max(50),
  time: z.string().trim().max(100),
  area: z.string().trim().max(150),
  note: z.string().trim().max(1000),
});

const field =
  "mt-1.5 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary";
const labelCls = "block text-sm font-medium text-foreground";

export function LeadForm({ defaultOccasion }: { defaultOccasion?: string }) {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    track("flower_inquiry_submit", {
      occasion: parsed.data.occasion,
      budget: parsed.data.budget,
    });
    setSent(true);
  }

  return (
    <section id="dat-hoa" className="section-y scroll-mt-24 bg-accent/60">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <p className="eyebrow">Nhận báo giá</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            Bạn chưa biết chọn mẫu nào? Chúng tôi tư vấn giúp bạn.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">
            Chỉ cần cho shop biết dịp tặng hoa, ngân sách và thời gian giao. Chúng tôi sẽ tư vấn mẫu
            phù hợp.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
          {sent ? (
            <p role="status" className="py-10 text-center font-display text-xl text-primary">
              Cảm ơn bạn! Shop sẽ liên hệ lại sớm để tư vấn mẫu hoa phù hợp.
            </p>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className={labelCls} htmlFor="name">
                  Họ và tên
                </label>
                <input id="name" name="name" className={field} autoComplete="name" required />
                {errors['name'] && <p className="mt-1 text-xs text-destructive">{errors['name']}</p>}
              </div>
              <div>
                <label className={labelCls} htmlFor="phone">
                  Số điện thoại
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  className={field}
                  autoComplete="tel"
                  required
                />
                {errors['phone'] && <p className="mt-1 text-xs text-destructive">{errors['phone']}</p>}
              </div>
              <div>
                <label className={labelCls} htmlFor="occasion">
                  Bạn cần hoa cho dịp nào?
                </label>
                <select
                  id="occasion"
                  name="occasion"
                  className={field}
                  defaultValue={defaultOccasion ?? occasions[0]}
                >
                  {occasions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelCls} htmlFor="budget">
                  Ngân sách dự kiến
                </label>
                <select id="budget" name="budget" className={field} defaultValue={budgets[4]}>
                  {budgets.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelCls} htmlFor="time">
                  Thời gian cần giao
                </label>
                <input id="time" name="time" className={field} placeholder="VD: 15h hôm nay" />
              </div>
              <div>
                <label className={labelCls} htmlFor="area">
                  Khu vực giao hoa
                </label>
                <input id="area" name="area" className={field} placeholder="VD: Phường 2, Vũng Tàu" />
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls} htmlFor="note">
                  Nội dung yêu cầu
                </label>
                <textarea id="note" name="note" rows={3} className={field} />
              </div>
              <button
                type="submit"
                className="mt-1 inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-primary px-6 text-sm font-semibold text-primary-foreground shadow-soft transition-shadow hover:shadow-lift sm:col-span-2"
              >
                NHẬN TƯ VẤN &amp; BÁO GIÁ
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
