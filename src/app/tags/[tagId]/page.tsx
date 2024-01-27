import ArticleCardList from "@/components/ArticleCardList/ArticleCardList";
import Pagenation from "@/components/Pagenation/Pagenation";
import TagsHeader from "@/components/TagsHeader/TagsHeader";
import { LIMIT } from "@/constants/constants";
import { getList, getTag } from "@/lib/api";
import React from "react";

type Props = {
  params: {
    tagId: string;
  };
  searchParams: {
    page?: string;
  };
};

export default async function page({ params, searchParams }: Props) {
  const { tagId } = params;
  const { page } = searchParams;
  const current = parseInt(page as string) || 1;
  const articleList = await getList({
    limit: LIMIT,
    filters: `tags[contains]${tagId}`,
  });
  const totalCount = articleList.totalCount;
  const basePath = `/tags/${tagId}`;
  const tag = await getTag(tagId);
  return (
    <>
      <TagsHeader tag={tag} />
      <div className="bg-topBackground md:h-auto">
        <div className="container mx-auto mt-4 p-4">
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
