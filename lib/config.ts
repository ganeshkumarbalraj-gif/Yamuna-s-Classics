export const config = {
  siteName:
    process.env.NEXT_PUBLIC_SITE_NAME ??
    "Yamuna's Classics",

  whatsapp:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ??
    "",

  email:
    process.env.NEXT_PUBLIC_EMAIL ??
    "",

  location:
    process.env.NEXT_PUBLIC_LOCATION ??
    "",
};