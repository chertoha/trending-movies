import MoviesList from "components/MoviesList";
import Head from "next/head";
import {
  useGetTrendingsQuery,
  // useSearchMovieQuery,
  // useMovieDetailsQuery,
  // useMovieCastQuery,
  // useMovieReviewsQuery,
} from "redux/moviesApi";
import Movies from "./movies";

const Home = () => {
  const response = useGetTrendingsQuery();
  const movies = response?.data?.results;
  console.log(movies);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>Home page</div>
      <MoviesList movies={movies}></MoviesList>
      {/* <ul>
        {}
        <li>
          <Link href="/movies/1">movie 1</Link>
          <Link href="/movies/2">movie 2</Link>
          <Link href="/movies/3">movie 3</Link>
        </li>
      </ul> */}
    </>
  );
};

export default Home;
