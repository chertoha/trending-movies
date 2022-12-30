import axios from "axios";
import { API_KEY, BASE_URL } from "utils/config";

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchTrendings = async () => {
  const response = await api.get(`trending/movie/day`);
  console.log(response);
  return response.data;
};

export const fetchMovieDetails = async (id: string) => {
  const response = await api.get(`movie/${id}`);
  return response.data;
};

export const fetchSearchedMovies = async (query: string) => {
  const response = await api.get(`search/movie`, { params: { query } });
  return response.data;
};

export const fetchMovieCast = async (id: string) => {
  const response = await api.get(`movie/${id}/credits`);
  return response.data;
};

export const fetchMovieReviews = async (id: string) => {
  const response = await api.get(`movie/${id}/reviews`);
  return response.data;
};
