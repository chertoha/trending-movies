import MovieDetails from "components/MovieDetails";
import Head from "next/head";
import { useRouter } from "next/router";
import { IMovie } from "types";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "redux/store";
import { setPrevPage } from "redux/prevPageSlice";
import { FC, useEffect } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { fetchMovieDetails } from "services/api";
import AdditionalInfo from "components/AdditionalInfo";
import MovieDetailsLayout from "components/MovieDetailsLayout";
import { serverSideMovieDetails } from "utils/serverSideMovieDetails";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const result = serverSideMovieDetails(context) as any;

  return result;
  // const { id } = context.params as { id: string };
  // const data = await fetchMovieDetails(id);
  // // const data = null;

  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }
  // return {
  //   props: {
  //     data,
  //   },
  // };
};

type MoviePropsType = {
  data: IMovie;
};

const Movie: FC<MoviePropsType> = ({ data }) => {
  const router = useRouter();
  const movieId = router.query.id as string;

  // useDispatch(setPrevPage("/movies"));

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setPrevPage("/movies"));
  // }, [dispatch]);

  return (
    <div>
      <Head>
        <title>Movie details</title>
      </Head>

      <MovieDetailsLayout movieData={data} movieId={movieId} />
    </div>
  );
};

export default Movie;
