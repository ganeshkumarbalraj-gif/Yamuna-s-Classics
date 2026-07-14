const API_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ??
  "http://localhost:1337/api";

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,

    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },

    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `API Error ${response.status}`
    );
  }

  return response.json();
}