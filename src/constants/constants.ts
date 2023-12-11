export const BASE_URL = "/api";

type ApiUrl = Record<string, string>;

export const API_URL: ApiUrl = {
  ARTICLES: "/articles",
  ARTICLES_DETAIL: "/article",
};

export const API_MOCK: ApiUrl = {
  ARTICLES: `${BASE_URL}/articles`,
  ARTICLE_DETAIL: `${BASE_URL}/article/:articleSlug`,
};
