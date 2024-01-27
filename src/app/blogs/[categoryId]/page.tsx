import ArticleCardList from "@/components/ArticleCardList/ArticleCardList";
import Nav from "@/components/Nav/Nav";
import React from "react";
import BlogsNav from "@/components/BlogsNav/BlogsNav";
import { getList } from "@/lib/api";
import { LIMIT } from "@/constants/constants";
import Pagenation from "@/components/Pagenation/Pagenation";

type Props = {
  params: {
    categoryId: string;
  };
  searchParams: {
    page?: string;
  };
};

export default async function page({ params, searchParams }: Props) {
  const { categoryId } = params;
  const { page } = searchParams;
  const current = parseInt(page as string) || 1;
  const articleList =
    categoryId == "new"
      ? await getList({
          limit: LIMIT,
          offset: LIMIT * (current - 1),
          orders: "-createdAt",
        })
      : await getList({
          limit: LIMIT,
          offset: LIMIT * (current - 1),
          filters: `category[equals]${categoryId}`,
        });
  const totalCount = articleList.totalCount;
  const basePath = `/blogs/${categoryId}`;
  return (
    <>
      <Nav navId="blogs" />
      <div className="bg-topBackground md:h-auto">
        <div className="container mx-auto p-4">
          <div className="flex">
            <div className="pb-4 text-2xl font-extrabold text-paragraph">
              ブログ
            </div>
          </div>
          <BlogsNav navId={categoryId} />
          <ArticleCardList articles={articleList.contents} />
          <div className="pt-4">
            <Pagenation
              totalCount={totalCount}
              current={current}
              basePath={basePath}
            ></Pagenation>
          </div>
        </div>
      </div>
    </>
  );
}
