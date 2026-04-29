import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rajshekarrc.vercel.app";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/resume`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work/resumeiq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/work/cancer-detection`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/work/hustlenote`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/work/campus-marketplace`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/work/iris-detection`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/work/bird-species`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
