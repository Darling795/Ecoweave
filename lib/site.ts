// Central place for shop details. Edit these, or override with environment
// variables (see .env.example) when deploying.

export const site = {
  name: "Ecoweave",
  fullName: "Ecoweave Bags n Accessories Shop",
  tagline: "Bags n Accessories Shop",
  description:
    "Discover charming upcycled denim bags and accessories at Ecoweave Bags n Accessories Shop.",
  announcement: "LITTLE FINDS, LOVINGLY CHOSEN ✿ EST. 2025",

  // Where "message us" enquiries should reach your mum. Shown on the site and
  // used as the email fallback if the server email isn't configured yet.
  email: process.env.NEXT_PUBLIC_SHOP_EMAIL || "hello@ecoweave.shop",

  // Optional secondary contact shown under the form. Leave empty to hide.
  facebookUrl: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "", // e.g. "27821234567" (digits only, with country code)
};

export type Site = typeof site;
