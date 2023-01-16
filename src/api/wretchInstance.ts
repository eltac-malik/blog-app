import wretch from "wretch";

const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:3500";

const url = new URL(baseUrl);
url.pathname = "/api/v1";
export const http = wretch(url.toString());
