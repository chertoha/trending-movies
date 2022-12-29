import MoviesList from "components/MoviesList";
import Movies from "./movies";
import Head from "next/head";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { fetchTrendings } from "services/api";
import { IMovie } from "types";
import { FC } from "react";
// import {
//   useGetTrendingsQuery,
//   // useSearchMovieQuery,
//   // useMovieDetailsQuery,
//   // useMovieCastQuery,
//   // useMovieReviewsQuery,
// } from "redux/moviesApi";

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await fetchTrendings();
    const movies = data.results;

    if (!movies) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        movies,
        error: null,
      },
    };
  } catch (error) {
    // console.log(error);
    return {
      props: {
        movies: null,
        error,
      },
    };
  }
};

type HomePropsType = {
  movies: IMovie[];
  error: { message: string };
};

const Home: FC<HomePropsType> = ({ movies, error }) => {
  // const response = useGetTrendingsQuery();
  // const movies = response?.data?.results;
  // console.log(movies);
  console.log(movies);

  if (error)
    return (
      <div>
        Sorry, something went wrong.
        {error.message && `Error: ${error.message}`}
      </div>
    );

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
