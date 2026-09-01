import { Link } from "@tanstack/react-router";
import { Flower2, Phone } from "lucide-react";
import { business } from "@/lib/site";
import { track } from "@/lib/track";

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-2 backdrop-blur lg:hidden">
      <a
        href={business.phoneHref}
        onClick={() => track("phone_call_click", { location: "mobile_bar" })}
        className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-gradient-primary text-sm font-semibold text-primary-foreground"
      >
        <Phone className="size-4" aria-hidden="true" />
        Gọi ngay
      </a>
      <Link
        to="/lien-he"
        hash="dat-hoa"
        onClick={() => track("order_cta_click", { location: "mobile_bar" })}
        className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-primary/30 bg-card text-sm font-semibold text-primary"
      >
        <Flower2 className="size-4" aria-hidden="true" />
        Đặt hoa
      </Link>
    </div>
  );
}
