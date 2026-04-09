import type { Metadata } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import EmailLink from "./components/EmailLink";

export const metadata: Metadata = {
title: "CL Automotive",
description: "Terms of Website for Dean Rice Design Co.",
openGraph: {
title: "CL Automotive",
description: "DPF Repairs, Vehicle Diagnostics and Remapping in Northumberland",
url: "/", 
siteName: "CL Automotive",
images: [
{
url: "/images/meta/cl-automotive.webp",
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
url: "/images/meta/cl-automotive.webp",
alt: "CL Automotive DPF Repairs, Diagnostics and Remapping in Northumberland",
},
],
},
};

export default function Page() {
return (
<>
<div className="bgbox">
<div className="bg"></div>
<div className="bgfilter"></div>
</div>


<div className="wrapper">

<div className="content">
<div className="cl-logo">
<Image
className="clauto-logo-image"
src="/cl-automotive.svg"
alt="CL Automotive Logo"
width={548}
height={320}
priority
/>
</div>
<div className="cl-ppp">
<div className="cl-ppp-flex">Power<span>.</span> </div>
<div className="cl-ppp-flex">Performance<span>.</span> </div>
<div className="cl-ppp-flex">Precision<span>.</span></div>
</div>

<div className="cl-cs">Website Coming Soon</div>
<div className="cl-git">Get in touch..</div>
<a href="tel:07853617570" className="cl-mobile">07853 617570</a>
<div className="cl-emaildiv"><EmailLink /></div>
<div className="cl-address">
16 Woodhorn Road<br />
Newbiggin-by-the-Sea<br />
NE64 6HZ</div>
<a href="https://www.facebook.com/profile.php?id=61577547781336"  target="_blank" className="cl-facebook">Follow Us on Facebook</a>
</div>
</div>
</>
);
}