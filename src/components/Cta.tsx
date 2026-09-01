import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { business } from "@/lib/site";
import { track } from "@/lib/track";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 min-h-12";

export function CallButton({
  className,
  label = `GỌI NGAY — ${business.phoneDisplay}`,
  location,
}: {
  className?: string;
  label?: string;
  location: string;
}) {
  return (
    <a
      href={business.phoneHref}
      onClick={() => track("phone_call_click", { location })}
      className={cn(
        base,
        "bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-lift hover:-translate-y-0.5",
        className,
      )}
    >
      <Phone className="size-4" aria-hidden="true" />
      {label}
    </a>
  );
}

export function OrderButton({
  className,
  label = "ĐẶT HOA NGAY",
  location,
}: {
  className?: string;
  label?: string;
  location: string;
}) {
  return (
    <Link
      to="/lien-he"
      hash="dat-hoa"
      onClick={() => track("order_cta_click", { location })}
      className={cn(
        base,
        "border border-primary/30 bg-card text-primary hover:bg-accent",
        className,
      )}
    >
      {label}
    </Link>
  );
}
