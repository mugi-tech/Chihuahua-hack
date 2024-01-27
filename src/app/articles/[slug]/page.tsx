import Article from "@/components/Article/Article";
import { getDetail } from "@/lib/api";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};
export default async function page({ params }: Props) {
  const { slug } = params;
  const article = await getDetail(slug);
  return <Article article={article}></Article>;
}
