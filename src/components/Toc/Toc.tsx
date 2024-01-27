"use client";

import { useEffect, useState } from "react";
import tocbot from "tocbot";
import "./Toc.css";

export default function Toc() {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".znc",
      headingSelector: "h2, h3",
    });

    return () => {
      tocbot.destroy();
    };
  }, []);

  return (
    <div className="rounded-lg bg-white p-4">
      <p className="font-extrabold">目次</p>
      <nav className="toc" />
    </div>
  );
}
