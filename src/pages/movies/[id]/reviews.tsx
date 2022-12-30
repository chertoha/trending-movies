import MovieDetailsLayout from "components/MovieDetailsLayout";
import ReviewsList from "components/ReviewsList/ReviewsList";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { fetchMovieDetails, fetchMovieReviews } from "services/api";
import { IMovie } from "types";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.params as { id: string };
  const data = await fetchMovieDetails(id);
  const { results: reviews } = await fetchMovieReviews(id);
  // const data = null;

  if (!data || !reviews) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movieId: id,
      movieData: data,
      reviews,
    },
  };
};

type ReviewsPropsType = {
  movieId: string;
  movieData: IMovie;
  reviews: any;
};

const Reviews: FC<ReviewsPropsType> = ({ movieId, movieData, reviews }) => {
  // console.log(reviews);

  return (
    <div>
      <Head>
        <title>Reviews </title>
      </Head>
      <MovieDetailsLayout movieData={movieData} movieId={movieId} />
      <ReviewsList reviews={reviews} />
    </div>
  );
};

export default Reviews;
