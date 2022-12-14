import { API_KEY, BASE_URL } from "utils/config";

import {
  createApi,
  // FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

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

export type Movie = {
  id: number | string;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  genre_ids: number[];
  release_date: Date;
  vote_average: number;
  vote_count: number;
};

export type FetchResultType = {
  page: number;
  results: Movie[];
  total_results: number;
};

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  //   baseQuery: axiosBaseQuery({
  //     baseUrl: BASE_URL,
  //   }),
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    // baseUrl: "https://api.themoviedb.org/3",
    // prepareHeaders(headers) {
    //   headers.set("x-api-key", API_KEY);
    //   return headers;
    // },
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
      //   query: () => ({
      //     url: "/trending/movie/day?api_key=1936ce94882661ecfd75d2c22e8905aa",
      //     params: `api_key=1936ce94882661ecfd75d2c22e8905aa`,
      //   }),
      // }),
      getTrendings: build.query<FetchResultType, string | void>({
        query: () => ({
          url: "/trending/movie/day",
          params: { api_key: API_KEY },
        }),
        transformResponse: (response: { results: Movie[] }) => response.results,
      }),

      searchMovie: build.query<FetchResultType, string | void>({
        query: (query) => ({
          url: "/search/movie",
          params: { api_key: API_KEY, query },
        }),
      }),

      movieDetails: build.query<FetchResultType, string | void>({
        query: (id) => ({
          url: `/movie/${id}`,
          params: { api_key: API_KEY },
        }),
      }),

      movieCast: build.query<FetchResultType, string | void>({
        query: (id) => ({
          url: `movie/${id}/credits`,
          params: { api_key: API_KEY },
        }),
      }),

      movieReviews: build.query<FetchResultType, string | void>({
        query: (id) => ({
          url: `movie/${id}/reviews`,
          params: { api_key: API_KEY },
        }),
      }),
    };
  },
});

export const {
  useGetTrendingsQuery,
  useSearchMovieQuery,
  useMovieDetailsQuery,
  useMovieCastQuery,
  useMovieReviewsQuery,
} = moviesApi;

//718930
// const getTrendings = async () => {
//   const response = await fetchMovies.get(`trending/movie/day`);
//   return response.data.results;
// };

// const searchMovie = async (query) => {
//   const response = await fetchMovies.get(`search/movie`, {
//     params: { query: query },
//   });
//   return response.data.results;
// };

// const movieDetails = async (movieId) => {
//   const response = await fetchMovies.get(`movie/${movieId}`);
//   return response.data;
// };

// const movieCast = async (movieId) => {
//   const response = await fetchMovies.get(`movie/${movieId}/credits`);
//   return response.data.cast;
// };

// const movieReviews = async (movieId) => {
//   const response = await fetchMovies.get(`movie/${movieId}/reviews`);
//   return response.data.results;
// };
