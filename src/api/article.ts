import { fetchAPI } from ".";
import { FULL_API_URL } from "@constants";

export const getArticles = (slug: string) => {
  return fetchAPI(`${FULL_API_URL.ARTICLES}?categoriesSlug=${slug}`);
};

export const getArticleDetail = (slug: string) => {
  return fetchAPI(`${FULL_API_URL.ARTICLES_DETAIL}/${slug}`);
};
