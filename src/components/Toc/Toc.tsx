"use client";

import { useEffect } from "react";
import tocbot from "tocbot";
import classes from "./Toc.module.css";

export default function Toc() {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".body",
      headingSelector: "h2, h3",
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <>
      {/* 本文 */}
      <div className="body">
        <h2 id="2">見出し2</h2>
        <h3 id="3">見出し3</h3>
        <h2>見出し2</h2>
      </div>
      {/* 目次 */}
      <nav className="toc" />
    </>
  );
}
