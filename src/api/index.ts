import { BASE_URL } from "@constants";

export const fetchAPI = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(`${BASE_URL}${url}`);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return response.json() as Promise<T>;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
