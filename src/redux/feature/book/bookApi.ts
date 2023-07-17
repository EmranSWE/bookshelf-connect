/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllBooks: build.query({
      query: ({
        limit = 10,
        page = 1,
        genre = undefined,
        author = undefined,
        searchTerm = undefined,
        pub_date = undefined,
        allProducts = false,
      }) => {
        if (allProducts) {
          return "/books/getAllBooks";
        } else {
          let queryString = `/books/getAllBooks/?limit=${limit}&page=${page}`;

          if (genre) {
            queryString += `&genre=${genre}`;
          }

          if (pub_date) {
            queryString += `&pub_date=${pub_date}`;
          }
          if (author) {
            queryString += `&author=${author}`;
          }
          if (searchTerm) {
            queryString += `&searchTerm=${searchTerm}`;
          }
          return queryString;
        }
      },
    }),
    singleBook: build.query({
      query: (id) => `/books/getSingleBooks/${id}`,
    }),
    postABook: build.mutation({
      query: (data) => ({
        url: `/books/create-book`,
        method: "POST",
        body: data,
      }),
    }),

    postAReview: build.mutation({
      query: ({ id, data }) => ({
        url: `/books/create-review/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    singleReview: build.query({
      query: (id) => `/books/getReview/${id}`,
    }),
    updateABook: build.mutation({
      query: ({ id, data }) => ({
        url: `/books/updateSingleBooks/${id}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  usePostABookMutation,
  useSingleBookQuery,
  useUpdateABookMutation,
  useSingleReviewQuery,
  usePostAReviewMutation,
} = bookApi;
