import { http, HttpResponse } from "msw";
import { FULL_MOCK_API_URL } from "@constants";
const designData = require("/public/data/design.json");
const techData = require("/public/data/tech.json");
const articleDetailData = require("/public/data/articleDetail.json");

const getArticleData = (category: string | null) => {
  switch (category) {
    case "tech":
      return techData;
    case "design":
      return designData;
    default:
      return techData;
  }
};

const getDataFromCategoriesSlug = (url: string) => {
  const categoriesSlug = new URL(url).searchParams.get("categoriesSlug");
  return getArticleData(categoriesSlug);
};

const findArticleDetailById = (
  id: string | readonly string[],
  articles: any
) => {
  const article = articles.find((article: any) => article.key === id);
  if (!article) return null;

  const articleDetail = articleDetailData.find(
    (detail: any) => Number(detail.success.postId) === article.id
  );
  return articleDetail ?? null;
};

export const handlers = [
  http.get(FULL_MOCK_API_URL.ARTICLES, ({ request }) => {
    const data = getDataFromCategoriesSlug(request.url);
    if (!data || data.length === 0) {
      return new HttpResponse("Not found", {
        status: 404,
      });
    }
    return HttpResponse.json(data);
  }),

  http.get(FULL_MOCK_API_URL.ARTICLE_DETAIL, ({ params }) => {
    const articleDetail = findArticleDetailById(
      params.articleSlug,
      techData.concat(designData)
    );
    if (!articleDetail) {
      return new HttpResponse("Not found", {
        status: 404,
      });
    }
    return HttpResponse.json(articleDetail);
  }),
];
