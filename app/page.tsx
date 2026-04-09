import type { Metadata } from "next";
import AnimatedContent from "./components/AnimatedContent";

export const metadata: Metadata = {
  title: "CL Automotive",
  description: "DPF Repairs, Vehicle Diagnostics and Remapping in Northumberland",
  openGraph: {
    title: "CL Automotive",
    description: "DPF Repairs, Vehicle Diagnostics and Remapping in Northumberland",
    url: "/",
    siteName: "CL Automotive",
    images: [
      {
        url: "/cl-automotive.webp",
        width: 1200,
        height: 630,
        alt: "CL Automotive",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CL Automotive",
    description: "DPF Repairs, Vehicle Diagnostics and Remapping in Northumberland",
    images: [
      {
        url: "/cl-automotive.webp",
        alt: "CL Automotive DPF Repairs, Diagnostics and Remapping in Northumberland",
      },
    ],
  },
};

export default function Page() {
  return <AnimatedContent />;
}