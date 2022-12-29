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

type ReviewsPropsType = {
  data: IMovie;
};

const Reviews: FC<ReviewsPropsType> = ({ data }) => {
  const router = useRouter();
  const movieId = router.query.id as string;

  return (
    <div>
      <Head>
        <title>Reviews </title>
      </Head>
      <MovieDetailsLayout movieData={data} movieId={movieId} />
      Reviews
    </div>
  );
};

export default Reviews;
