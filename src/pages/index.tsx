import MoviesList from "components/MoviesList";
import Movies from "./movies";
import Head from "next/head";
import {
  useGetTrendingsQuery,
  // useSearchMovieQuery,
  // useMovieDetailsQuery,
  // useMovieCastQuery,
  // useMovieReviewsQuery,
} from "redux/moviesApi";

const Home = () => {
  const response = useGetTrendingsQuery();
  const movies = response?.data?.results;
  // console.log(movies);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Trending today</h1>
      <MoviesList movies={movies}></MoviesList>
    </>
  );
};

export default Home;
