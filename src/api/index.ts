export const fetchAPI = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};
