'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import EmailLink from "./EmailLink";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const group1 = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const group2 = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.08,
    },
  },
};

export default function AnimatedContent() {
  return (
    <>
      <div className="bgbox">
        <div className="bg" />
        <div className="bgfilter"></div>
      </div>

      <div className="wrapper">
        <motion.div
          className="content"
          initial="hidden"
          animate="show"
        >
          <motion.div variants={group1}>
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

            <motion.div className="cl-cs" variants={fadeUp}>
              Website Coming Soon
            </motion.div>
          </motion.div>

          <motion.div variants={group2}>
            <motion.div className="cl-git" variants={fadeUp}>
              Get in touch..
            </motion.div>

            <motion.a href="tel:07853617570" className="cl-mobile" variants={fadeUp}>
              07853 617570
            </motion.a>

            <motion.div className="cl-emaildiv" variants={fadeUp}>
              <EmailLink />
            </motion.div>

            <motion.div className="cl-address" variants={fadeUp}>
              16 Woodhorn Road<br />
              Newbiggin-by-the-Sea<br />
              NE64 6HZ
            </motion.div>

            <motion.a
              href="https://www.facebook.com/profile.php?id=61577547781336"
              target="_blank"
              className="cl-facebook"
              variants={fadeUp}
            >
              Follow Us on Facebook
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}