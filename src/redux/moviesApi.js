import { API_KEY, BASE_URL } from "utils/config";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import axios from "axios";

// import type { BaseQueryFn } from "@reduxjs/toolkit/query";
// import type { AxiosRequestConfig, AxiosError } from "axios";

// const axiosBaseQuery =
//   (
//     { baseUrl }: { baseUrl: string } = { baseUrl: "" }
//   ): BaseQueryFn<
//     {
//       url: string;
//       method: AxiosRequestConfig["method"];
//       data?: AxiosRequestConfig["data"];
//       params?: AxiosRequestConfig["params"];
//     },
//     unknown,
//     unknown
//   > =>
//   async ({ url, method, data, params }) => {
//     try {
//       const result = await axios({ url: baseUrl + url, method, data, params });
//       return { data: result.data };
//     } catch (axiosError) {
//       let err = axiosError as AxiosError;
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       };
//     }
//   };

// export type Movie = {
//   id: number | string;
//   title: string;
//   original_title: string;
//   overview: string;
//   poster_path: string;
//   genre_ids: number[];
//   release_date: Date;
//   vote_average: number;
//   vote_count: number;
// };

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  //   baseQuery: axiosBaseQuery({
  //     baseUrl: BASE_URL,
  //   }),
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders(headers) {
      headers.set("x-api-key", API_KEY);
      return headers;
    },
  }),
  endpoints(build) {
    return {
      //   getMovies: build.query({
      //     query: () => ({
      //       url: "/trending/movie/day",
      //       method: "get",
      //       params: { api_key: API_KEY },
      //     }),
      //   }),
      // getMovies: build.query<Movie[], number | void>({
      //   query: () => "/trending/movie/day",
      // }),
      getMovies: build.query({
        query: () => "/trending/movie/day",
      }),
    };
  },
});

export const { useGetMoviesQuery } = moviesApi;
