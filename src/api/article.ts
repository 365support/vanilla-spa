import { API_URL } from "@constants";

export const getArticles = async (slug: string) => {
  try {
    const response = await fetch(`${API_URL.ARTICLES}?categoriesSlug=${slug}`);
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getArticleDetail = async (slug: string) => {
  try {
    const response = await fetch(`${API_URL.ARTICLES_DETAIL}/${slug}`);
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};
