import React from "react";
import { tags, articleList } from "@/mockdata/mockdata";
import { Tag } from "@/lib/type";
import TagItem from "@/components/TagItem/TagItem";
import Search from "@/components/Search/Search";
import ArticleCardList from "@/components/ArticleCardList/ArticleCardList";

type Props = {
  searchParams: {
    q?: string;
    page?: string;
  };
};

export default function page({ searchParams }: Props) {
  const q = searchParams.q;
  const page = searchParams.page;
  if (q !== undefined) {
    // データ取得処理
  }
  return (
    <div className="container pt-4">
      <div className="mx-auto max-w-sm md:max-w-4xl">
        <Search />

        {q === undefined ? (
          <>
            <h3 className="pt-6 text-2xl font-extrabold text-paragraph">
              タグ一覧
            </h3>
            <div className="mt-4 grid grid-cols-3 gap-5 md:grid-cols-6">
              {tags.map((tag: Tag) => (
                <TagItem tag={tag} key={tag.id} />
              ))}
            </div>
          </>
        ) : (
          <>
            <h3 className="pt-6 text-2xl font-extrabold text-paragraph">
              検索結果
            </h3>
            <ArticleCardList articles={articleList} />
          </>
        )}
      </div>
    </div>
  );
}
