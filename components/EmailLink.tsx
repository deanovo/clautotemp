'use client';

import { useEffect, useState } from "react";

export default function EmailLink() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(["callum", "@", "clautomotive.co.uk"].join(""));
  }, []);

  if (!email) return null;

  return (
    <a href={`mailto:${email}`} className="cl-email">
      {email}
    </a>
  );
}