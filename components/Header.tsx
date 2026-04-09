"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
const [menuOpen, setMenuOpen] = useState(false);

return (
<header className="header">
<Link href="/" className="drdco-logo">
<Image
className="drdco-logo-image"
src="/images/Dean-Rice-Design-Co-Logo-light.svg"
alt="Dean Rice Design Co. Logo"
width={615}
height={221}
priority
/>
</Link>
<div className="drdco-header-menus">
<Link href="/start-project" className="drdco-quote">Start a project</Link>
<div className="drdco-menu">
<Link href="/about" className="drdco-menu-item">About</Link>
<Link href="/services" className="drdco-menu-item">Services</Link>
<Link href="/work" className="drdco-menu-item">Work</Link>
<Link href="/contact" className="drdco-menu-item">Contact</Link>
</div>
<div className="drdco-menu drdco-menu-mobile" onClick={() => setMenuOpen((prev) => !prev)}><span className="drdco-menu-span">Menu •••</span></div>
</div>
<div className={`drdco-menu-window${menuOpen ? " drdco-menu-window-active" : ""}`}>
<Link href="/about" className="drdco-menu-item">About</Link>
<Link href="/services" className="drdco-menu-item">Services</Link>
<Link href="/work" className="drdco-menu-item">Work</Link>
<Link href="/contact" className="drdco-menu-item">Contact</Link>
</div>
</header>
);
}