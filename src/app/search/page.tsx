import React from "react";
import { tags, articleList } from "@/mockdata/mockdata";
import { Tag } from "@/lib/type";
import TagItem from "@/components/TagItem/TagItem";
import Search from "@/components/Search/Search";
import ArticleCardList from "@/components/ArticleCardList/ArticleCardList";
import { LIMIT } from "@/constants/constants";
import { getList } from "@/lib/api";
import Pagenation from "@/components/Pagenation/Pagenation";

type Props = {
  searchParams: {
    q?: string;
    page?: string;
  };
};

export default async function page({ searchParams }: Props) {
  const { q, page } = searchParams;
  const current = parseInt(page as string) || 1;
  const articleList = await getList({
    limit: LIMIT,
    q: q,
  });
  console.log(articleList);
  const totalCount = articleList.totalCount || 0;
  const basePath = `/search`;
  return (
    // <div className="container pt-4">
    //   <div className="mx-auto max-w-sm md:max-w-4xl">
    //     <Search />
    //     {q === "" ? (
    //       <>
    //         <h3 className="pt-6 text-2xl font-extrabold text-paragraph">
    //           タグ一覧
    //         </h3>
    //         <div className="mt-4 grid grid-cols-3 gap-5 md:grid-cols-6">
    //           {tags.map((tag: Tag) => (
    //             <TagItem tag={tag} key={tag.id} />
    //           ))}
    //         </div>
    //       </>
    //     ) : (
    //       <>
    //         {totalCount === 0 ? (
    //           <h3 className="pt-6 text-2xl font-extrabold text-paragraph">
    //             記事が見つかりませんでした。。
    //           </h3>
    //         ) : (
    //           <div className="bg-topBackground md:h-auto">
    //             <div className="container mx-auto p-4">
    //               <div className="flex">
    //                 <div className="pb-4 text-2xl font-extrabold text-paragraph">
    //                   ブログ
    //                 </div>
    //               </div>
    //               <ArticleCardList articles={articleList.contents} />
    //               <div className="pt-4">
    //                 <Pagenation
    //                   totalCount={totalCount}
    //                   current={current}
    //                   basePath={basePath}
    //                   q={q}
    //                 ></Pagenation>
    //               </div>
    //             </div>
    //           </div>
    //         )}
    //       </>
    //     )}
    //   </div>
    // </div>
    <>
      <div className="container py-4">
        <div className="mx-auto max-w-sm md:max-w-4xl">
          <Search />
        </div>
      </div>
      <div className="bg-topBackground md:h-auto">
        <div className="container p-4">
          <div className="mx-auto max-w-sm md:max-w-4xl">
            {q === "" ? (
              <>
                <h3 className="pt-4 text-2xl font-extrabold text-paragraph">
                  タグ一覧
                </h3>
                <div className="grid grid-cols-3 gap-5 py-4 md:grid-cols-6">
                  {tags.map((tag: Tag) => (
                    <TagItem tag={tag} key={tag.id} />
                  ))}
                </div>
              </>
            ) : (
              <>
                {totalCount === 0 ? (
                  <h3 className="pt-6 text-2xl font-extrabold text-paragraph">
                    記事が見つかりませんでした。。
                  </h3>
                ) : (
                  <div className="bg-topBackground md:h-auto">
                    <div className="flex">
                      <div className="pb-4 text-2xl font-extrabold text-paragraph">
                        検索結果
                      </div>
                    </div>
                    <ArticleCardList articles={articleList.contents} />
                    <div className="pt-4">
                      <Pagenation
                        totalCount={totalCount}
                        current={current}
                        basePath={basePath}
                        q={q}
                      ></Pagenation>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
