import ArticleCardList from "@/components/ArticleCardList/ArticleCardList";
import Nav from "@/components/Nav/Nav";
import React from "react";
import { articleList } from "@/mockdata/mockdata";

export default function page() {
  return (
    <>
      <Nav />
      <div className="bg-topBackground md:h-full">
        <div className="container py-6">
          <div className="flex">
            <div className="pb-4 text-2xl font-extrabold text-paragraph">
              新着記事
            </div>
          </div>
          <ArticleCardList articles={articleList} />
        </div>
      </div>
    </>
  );
}
