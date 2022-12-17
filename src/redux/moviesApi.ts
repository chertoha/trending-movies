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

      movieDetails: build.query<{}, string | void>({
        query: (id) => {
          return { url: `/movie/${id}`, params: { api_key: API_KEY } };
        },
        // transformResponse(response: { data: FetchResultType }, meta, arg) {
        //   console.log("response -> ", response);
        //   return response;
        // },
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
