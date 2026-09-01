type TrackEvent =
  | "phone_call_click"
  | "flower_inquiry_submit"
  | "order_cta_click"
  | "directions_click"
  | "category_click"
  | "product_inquiry_click";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Pushes a conversion event to the GTM/GA dataLayer when available. */
export function track(event: TrackEvent, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
