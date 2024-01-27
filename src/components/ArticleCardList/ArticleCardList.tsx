import { Article } from "@/lib/type";
import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";

type Props = {
  articles: Article[];
};
export default function ArticleCardList({ articles }: Props) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {articles.map((article: Article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
