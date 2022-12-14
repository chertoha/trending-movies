import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useGetMoviesQuery } from "redux/moviesApi";

const Home = () => {
  const { data, error, loading } = useGetMoviesQuery();

  useEffect(() => {}, []);

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
