import MovieDetailsLayout from "components/MovieDetailsLayout";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { IMovie } from "types";
import { serverSideMovieDetails } from "utils/serverSideMovieDetails";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const data = serverSideMovieDetails(context) as any;

  return data;
};

type CastPropsType = {
  data: IMovie;
};

const Cast: FC<CastPropsType> = ({ data }) => {
  const router = useRouter();
  const movieId = router.query.id as string;

  const { id } = router.query;
  return (
    <div>
      <Head>
        <title>Cast id: {id}</title>
      </Head>
      <MovieDetailsLayout movieData={data} movieId={movieId} />
      Cast
    </div>
  );
};

export default Cast;
