export const COMPANY = {
  name: "Donewell Contractors",
  phoneRaw: "+447490044955",
  phoneDisplay: "+44 7490 044955",
  email: "info@donewellcontractors.co.uk",
} as const;

// Used by the review page when no env override is provided.
export const DEFAULT_GOOGLE_REVIEW_URL =
  "https://www.google.com/maps/place/donewell+contractors/@51.3854198,-0.9102267,17z/data=!3m1!4b1!4m6!3m5!1s0x487683065666ad7b:0xa51bd82452fefbeb!8m2!3d51.3854165!4d-0.9076518!16s%2Fg%2F11h32qlkft";

export const GOOGLE_REVIEW_URL =
  process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ?? DEFAULT_GOOGLE_REVIEW_URL;

// Shared demo storage key (used by quote builder + quote preview).
export const QUOTE_PREVIEW_STORAGE_KEY = "quote_preview_v1";


