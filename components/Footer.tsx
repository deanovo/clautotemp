"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
return (
<footer className="footer">

<div className="footertop">
<Image 
className="drdco-logo-image-footer" 
src="/images/dean-rice-design-co-logo-3d.webp"
alt="Dean Rice Design Co. 3D Logo"
width={1241}
height={1231}
/>

<div className="footer-menu footer-menu-one">
<Link href="/insights" className="drdco-menu-item">Insights</Link> 
<Link href="/faqs" className="drdco-menu-item">FAQs</Link> 
<Link href="/glossary" className="drdco-menu-item">Glossary</Link> 
<Link href="/prices" className="drdco-menu-item">Prices</Link> 
<Link href="/standard-service-agreement" className="drdco-menu-item">Standard Service Agreement</Link> </div>

<div className="footer-menu footer-menu-two">
<Link href="/work" className="drdco-menu-item">View my work</Link> 
<Link href="/services" className="drdco-menu-item">My services</Link> 
<Link href="/about" className="drdco-menu-item">About me</Link> 
<Link href="/contact" className="drdco-menu-item">Get in touch</Link>
<Link href="/start-project" className="drdco-menu-item">Quotes / Start a project</Link>
 </div>
</div>

<div className="footerbottom">
<div className="footeraddress">
<span>Dean Rice Design Co.</span><br />
Blyth Workspace, Quay Road, Blyth<br />
Northumberland, NE24 3AF, UK.<br /></div>

<div className="subfootertermlinks">
<Link href="/terms" className="subfooterlinks">Terms</Link> // <Link href="/accessibility" className="subfooterlinks">Accessibility</Link> <br />
<Link href="/cookie-policy" className="subfooterlinks">Cookie Policy</Link> // <Link href="/privacy-policy" className="subfooterlinks">Privacy Policy</Link>
</div>

<div className="footercopy">
©{new Date().getFullYear()} Dean Rice Design Co.</div>
</div>

<div className="standard-page-sectionseo">
<ul>
<li><Link href="/website-design-north-east" className="drco-view-work-link"><h2>Website Design North East</h2></Link></li>
<li><Link href="/website-design-newcastle" className="drco-view-work-link"><h2>Website Design Newcastle</h2></Link></li>
<li><Link href="/website-design-bedlington" className="drco-view-work-link"><h2>Website Design Bedlington, Northumberland</h2></Link></li>
<li><Link href="/website-design-blyth" className="drco-view-work-link"><h2>Website Design Blyth, Northumberland</h2></Link></li>
<li><Link href="/website-design-ashington" className="drco-view-work-link"><h2>Website Design Ashington, Northumberland</h2></Link></li>
<li><Link href="/website-design-northumberland" className="drco-view-work-link"><h2>Website Design Northumberland</h2></Link></li>
<li><Link href="/website-design-north-east" className="drco-view-work-link"><h3>North East Website Design</h3></Link></li>
<li><Link href="/website-design-newcastle" className="drco-view-work-link"><h3>Newcastle Website Design</h3></Link></li>
<li><Link href="/website-design-bedlington" className="drco-view-work-link"><h3>Bedlington Website Design</h3></Link></li>
<li><Link href="/website-design-blyth" className="drco-view-work-link"><h3>Blyth Website Design</h3></Link></li>
<li><Link href="/website-design-ashington" className="drco-view-work-link"><h3>Ashington Website Design</h3></Link></li>
<li><Link href="/website-design-northumberland" className="drco-view-work-link"><h3>Northumberland Website Design</h3></Link></li>
</ul>
</div>
</footer>
);
}







