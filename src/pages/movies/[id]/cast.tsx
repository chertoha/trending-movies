import CastList from "components/CastList";
import MovieDetailsLayout from "components/MovieDetailsLayout";
import Head from "next/head";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { FC } from "react";
import { fetchMovieCast, fetchMovieDetails } from "services/api";
import { ICast, IMovie } from "types";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.params as { id: string };
  const data = await fetchMovieDetails(id);
  const { cast } = await fetchMovieCast(id);
  // const data = null;

  if (!data || !cast) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movieId: id,
      movieData: data,
      cast,
    },
  };
};
type CastPropsType = {
  movieId: string;
  movieData: IMovie;
  cast: ICast[];
};

const Cast: FC<CastPropsType> = ({ movieId, movieData, cast }) => {
  console.log(cast);
  // const router = useRouter();
  // const movieId = router.query.id as string;

  // const { id } = router.query;
  return (
    <div>
      <Head>
        <title>Cast id: {movieId}</title>
      </Head>
      <MovieDetailsLayout movieData={movieData} movieId={movieId} />

      <CastList cast={cast} />
    </div>
  );
};

export default Cast;
