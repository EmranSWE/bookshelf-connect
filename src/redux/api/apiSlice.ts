import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["books"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bookshelf-connect-backend.vercel.app/api/v1",
    headers: {
      "Content-Type": "application/json",
    },
  }),

  endpoints: () => ({}),
});
