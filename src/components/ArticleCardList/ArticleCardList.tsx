import { Article } from "@/lib/type";
import { articleList } from "@/mockdata/mockdata";
import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";

type Props = {
  articles: Article[];
};
export default function ArticleCardList({ articles }: Props) {
  return (
    <div className="mt-2 grid grid-cols-1 gap-5 md:grid-cols-2">
      {articleList.map((article: Article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
