export const BASE_URL = "/api";

type ApiUrl = Record<string, string>;

export const API_URL: ApiUrl = {
  ARTICLES: "/articles",
  ARTICLES_DETAIL: "/article",
};

export const API_MOCK: ApiUrl = {
  ARTICLES: "/articles",
  ARTICLE_DETAIL: `/article/:articleSlug`,
};

const combineBaseUrlWithApiPaths = (baseUrl: string, apiUrl: ApiUrl) => {
  return Object.entries(apiUrl).reduce((acc: ApiUrl, [key, value]) => {
    acc[key] = `${baseUrl}${value}`;
    return acc;
  }, {});
};

export const FULL_API_URL = combineBaseUrlWithApiPaths(BASE_URL, API_URL);
export const FULL_MOCK_API_URL = combineBaseUrlWithApiPaths(BASE_URL, API_MOCK);
