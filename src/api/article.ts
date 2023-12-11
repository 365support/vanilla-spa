import { fetchAPI } from ".";
import { API_URL } from "@constants";

export const getArticles = (slug: string) => {
  return fetchAPI(`${API_URL.ARTICLES}?categoriesSlug=${slug}`);
};

export const getArticleDetail = (slug: string) => {
  return fetchAPI(`${API_URL.ARTICLES_DETAIL}/${slug}`);
};
