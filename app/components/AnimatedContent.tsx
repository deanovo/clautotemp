'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import EmailLink from "./EmailLink";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const bgFade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

export default function AnimatedContent() {
  return (
    <>
      <div className="bgbox">
        <div className="bg"/>
        <div className="bgfilter"></div>
      </div>

      <div className="wrapper">
        <motion.div
          className="content"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div className="cl-logo" variants={fadeUp}>
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

          <motion.div className="cl-cs" variants={fadeUp} transition={{ delay: -1.3 }}>
            Website Coming Soon
          </motion.div>

          <motion.div className="cl-git" variants={fadeUp} transition={{ delay: -0.2 }}>
            Get in touch..
          </motion.div>

          <motion.a href="tel:07853617570" className="cl-mobile" variants={fadeUp} transition={{ delay: -0.2 }}>
            07853 617570
          </motion.a>

          <motion.div className="cl-emaildiv" variants={fadeUp} transition={{ delay: -0.2 }}>
            <EmailLink />
          </motion.div>

          <motion.div className="cl-address" variants={fadeUp} transition={{ delay: -0.2 }}>
            16 Woodhorn Road<br />
            Newbiggin-by-the-Sea<br />
            NE64 6HZ
          </motion.div>

          <motion.a
            href="https://www.facebook.com/profile.php?id=61577547781336"
            target="_blank"
            className="cl-facebook"
            variants={fadeUp} transition={{ delay: -0.2 }}
          >
            Follow Us on Facebook
          </motion.a>
        </motion.div>
      </div>
    </>
  );
}