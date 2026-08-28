import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ejemplo-cambiar-dominio.es";
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/calculadora`, changeFrequency: "monthly", priority: 0.9 },
  ];
}
