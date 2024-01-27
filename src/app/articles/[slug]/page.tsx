import Article from "@/components/Article/Article";
import Toc from "@/components/Toc/Toc";
import React from "react";

import { articleList } from "@/mockdata/mockdata";

export default function page() {
  return <Article article={articleList[0]}></Article>;
}
