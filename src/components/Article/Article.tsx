import { Article } from "@/lib/type";
import React from "react";
import markdownToHtml from "zenn-markdown-html";

type Props = {
  article: Article;
};

export default function Article({ article }: Props) {
  return <div>Article</div>;
}
