const API_URL =
  "https://codevector-backend-task-u2hy.onrender.com/products";

export async function getProducts(
  limit = 20,
  category = "",
  cursor = ""
) {
  let url = `${API_URL}?limit=${limit}`;

  if (category) {
    url += `&category=${category}`;
  }

  if (cursor) {
    url += `&cursor=${cursor}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}