const vercelHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const siteUrl = vercelHost
  ? `https://${vercelHost}`
  : "https://deveshchoubey-portfolio.vercel.app";
