import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import {
  Movie,
  useGetTrendingsQuery,
  // useSearchMovieQuery,
  // useMovieDetailsQuery,
  // useMovieCastQuery,
  // useMovieReviewsQuery,
} from "redux/moviesApi";

import { FetchResultType } from "redux/moviesApi";

const Home = () => {
  const data: FetchResultType = useGetTrendingsQuery();
  const results: Movie[] = data.results;
  // const { data } = useSearchMovieQuery("bullet");
  // const { data } = useMovieReviewsQuery("718930");
  console.log(results);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>Home page</div>
      <ul>
        <li>
          <Link href="/movies/1">movie 1</Link>
          <Link href="/movies/2">movie 2</Link>
          <Link href="/movies/3">movie 3</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
