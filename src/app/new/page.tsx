import ArticleCardList from "@/components/ArticleCardList/ArticleCardList";
import Pagenation from "@/components/Pagenation/Pagenation";
import { LIMIT, TOP_LIMIT } from "@/constants/constants";
import { getList } from "@/lib/api";
import React from "react";

type Props = {
  searchParams: {
    page?: string;
  };
};
export default async function page({ searchParams }: Props) {
  const { page } = searchParams;
  const current = parseInt(page as string) || 1;
  const articleList = await getList({
    limit: LIMIT,
    offset: LIMIT * (current - 1),
    orders: "-createdAt",
  });
  const totalCount = articleList.totalCount;
  const basePath = "blogs/new";
  return (
    <>
      <div className="bg-topBackground md:h-auto">
        <div className="container mx-auto p-4">
          <h3 className="py-6 text-2xl font-extrabold text-paragraph">
            新着記事
          </h3>
          <ArticleCardList articles={articleList.contents} />
          <Pagenation
            totalCount={totalCount}
            current={current}
            basePath={basePath}
          ></Pagenation>
        </div>
      </div>
    </>
  );
}
