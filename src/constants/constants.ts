export const BASE_URL = "/api";

export const API_URL = {
  ARTICLES: `${BASE_URL}/articles`,
  ARTICLES_DETAIL: `${BASE_URL}/article`,
};

export const API_MOCK = {
  ARTICLES: API_URL.ARTICLES,
  ARTICLE_DETAIL: `${API_URL.ARTICLES_DETAIL}/:articleSlug`,
};
