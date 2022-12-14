import { API_KEY, BASE_URL } from "utils/config";

import {
  createApi,
  // FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { FetchResultType } from "types";

export const moviesApi = createApi({
  reducerPath: "moviesApi",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints(build) {
    return {
      getTrendings: build.query<FetchResultType, string | void>({
        query: () => ({
          url: "/trending/movie/day",
          params: { api_key: API_KEY },
        }),
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
