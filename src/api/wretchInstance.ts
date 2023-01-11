import wretch from "wretch";

const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:3500";

export const http = wretch(baseUrl);
