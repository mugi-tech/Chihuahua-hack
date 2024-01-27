import Nav from "@/components/Nav/Nav";
import ArticleCardList from "@/components/ArticleCardList/ArticleCardList";
import { getCategoryList, getList, getTagList } from "@/lib/api";
import { TOP_LIMIT } from "@/constants/constants";
import TagItem from "@/components/TagItem/TagItem";
import { Category, Tag } from "@/lib/type";
import CategoryItem from "@/components/CategoryItem/CategoryItem";

export default async function Home() {
  const data = await getList({
    limit: TOP_LIMIT,
    orders: "-createdAt",
  });
  const tags = await getTagList({
    offset: 0,
  });
  const categories = await getCategoryList({
    offset: 0,
  });
  return (
    <>
      <Nav />
      <div className="bg-topBackground md:h-auto">
        <div className="container mx-auto p-4">
          <div className="flex">
            <div className="pb-4 text-2xl font-extrabold text-paragraph">
              新着記事
            </div>
            <a
              href="blogs/new?page=1"
              className="invisible flex items-center pb-4 pl-4 text-sm text-paragraph hover:underline md:visible"
            >
              もっと見る →
            </a>
          </div>
          <ArticleCardList articles={data.contents} />
          <a
            href="blogs/new?page=1"
            className="flex items-center justify-center pt-4 text-sm font-extrabold text-paragraph hover:underline md:hidden"
          >
            もっと見る →
          </a>
          <h3 className="pt-6 text-2xl font-extrabold text-paragraph">
            カテゴリ一覧
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-5 md:grid-cols-3">
            {categories.contents.map((category: Category) => (
              <CategoryItem category={category} key={category.id} />
            ))}
          </div>
          <h3 className="pt-6 text-2xl font-extrabold text-paragraph">
            タグ一覧
          </h3>
          <div className="mt-4 grid grid-cols-3 gap-5 md:grid-cols-6">
            {tags.contents.map((tag: Tag) => (
              <TagItem tag={tag} key={tag.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
