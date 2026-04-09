'use client';

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import EmailLink from "./EmailLink";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUpLogo: Variants = {
hidden: { opacity: 0, y: 5 },
show: {opacity: 1,y: 0, transition: {duration: 3,ease: EASE, delay: 0.3},},
};

const fadeUp: Variants = {
hidden: { opacity: 0, y: 20 },
show: {opacity: 1,y: 0, transition: {duration: 0.4,ease: EASE, delay: 0},},
};

const fadeDownOne: Variants = {
hidden: { opacity: 0, y: -10 },
show: {opacity: 1,y: 0, transition: {duration: 2,ease: EASE, delay: 0.2},},
};

const fadeDowntwo: Variants = {
hidden: { opacity: 0, y: -10 },
show: {opacity: 1,y: 0, transition: {duration: 2,ease: EASE, delay: .3},},
};

const fadeDownThree: Variants = {
hidden: { opacity: 0, y: -10 },
show: {opacity: 1,y: 0, transition: {duration: 2,ease: EASE, delay: 0.4},},
};

const fadeDownFour: Variants = {
hidden: { opacity: 0, y: -10 },
show: {opacity: 1,y: 0, transition: {duration: 2,ease: EASE, delay: 0.5},},
};

const fadeDownFive: Variants = {
hidden: { opacity: 0, y: -10 },
show: {opacity: 1,y: 0, transition: {duration: 2,ease: EASE, delay: 0.6},},
};

const fadeDownSix: Variants = {
hidden: { opacity: 0, y: -10 },
show: {opacity: 1,y: 0, transition: {duration: 2,ease: EASE, delay: 0.7},},
};

const fadeDownSeven: Variants = {
hidden: { opacity: 0, y: -10 },
show: {opacity: 1,y: 0, transition: {duration: 2,ease: EASE, delay: 0.8},},
};


const fadeLeft: Variants = {
hidden: { opacity: 0, y: 10 },
show: {opacity: 1,y: 0,transition: {duration: 2,ease: EASE},},
};

const group1: Variants = {
hidden: {},
show: {transition: {staggerChildren: 0.2,},},
};

const group2: Variants = {
hidden: {},
show: {transition: {delayChildren: 0.1,staggerChildren: 0.25,},},
};

export default function AnimatedContent() {
return (
<>
<div className="bgbox">
<div className="bg" />
<div className="bgfilter"></div>
</div>

<div className="wrapper">
<motion.div className="content" initial="hidden" animate="show">
<motion.div variants={group1}>
<motion.div className="cl-logo" variants={fadeUpLogo}>
<Image
className="clauto-logo-image"
src="/cl-automotive.svg"
alt="CL Automotive Logo"
width={548}
height={320}
priority
/>
</motion.div>

<div className="cl-ppp">
{["Power", "Performance", "Precision"].map((text, i) => (
<motion.div key={i} className="cl-ppp-flex" variants={fadeLeft}>
{text}<span>.</span>
</motion.div>
))}
</div>

<motion.div className="cl-cs" variants={fadeDownOne}>
Website Coming Soon
</motion.div>
</motion.div>

<motion.div className="divider" variants={fadeDowntwo}></motion.div>

<motion.div variants={group2}>
<motion.div className="cl-git" variants={fadeDownThree}>
Get in touch..
</motion.div>

<motion.a
href="tel:07853617570"
className="cl-mobile"
variants={fadeDownFour}
>
07853 617570
</motion.a>

<motion.div className="cl-emaildiv" variants={fadeDownFive}>
<EmailLink />
</motion.div>

<motion.div className="cl-address" variants={fadeDownSix}>
16 Woodhorn Road<br />
Newbiggin-by-the-Sea<br />
NE64 6HZ
</motion.div>

<motion.a
href="https://www.facebook.com/profile.php?id=61577547781336"
target="_blank"
rel="noopener noreferrer"
className="cl-facebook"
variants={fadeDownSeven}
>
Follow Us on Facebook
</motion.a>
</motion.div>
</motion.div>
</div>
</>
);
}