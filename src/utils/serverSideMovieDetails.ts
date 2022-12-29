import { GetServerSidePropsContext } from "next";
import { fetchMovieDetails } from "services/api";

export const serverSideMovieDetails = async (
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
