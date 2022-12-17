import MovieDetails from "components/MovieDetails";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { IMovie } from "types";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "redux/store";
import { setPrevPage } from "redux/prevPageSlice";
import { FC, useEffect } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { fetchMovieDetails } from "services/api";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.params as { id: string };
  const data = await fetchMovieDetails(id);
  // const data = null;

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
};

type MoviePropsType = {
  data: IMovie;
};

const Movie: FC<MoviePropsType> = ({ data }) => {
  // useDispatch(setPrevPage("/movies"));

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setPrevPage("/movies"));
  // }, [dispatch]);

  const backPath = useSelector((state: RootState) => state.prevPage.path);

  return (
    <div>
      <Head>
        <title>Movie details</title>
      </Head>
      <MovieDetails data={data} backPath={backPath} />

      {/* <Link href={`/movies/${id}/cast`}>Cast</Link> */}
      {/* <Link href={`/movies/${id}/reviews`}>Reviews</Link> */}
    </div>
  );
};

export default Movie;
