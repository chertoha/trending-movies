import MovieDetails from "components/MovieDetails";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMovieDetailsQuery } from "redux/moviesApi";
import { IMovie } from "types";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "redux/store";
import { setPrevPage } from "redux/prevPageSlice";
import { useEffect } from "react";

const Movie = () => {
  // useDispatch(setPrevPage("/movies"));

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setPrevPage("/movies"));
  // }, [dispatch]);

  const backPath = useSelector((state: RootState) => state.prevPage.path);

  console.log(backPath);

  const router = useRouter();
  // console.log(router);
  const { id } = router.query;

  const response = useMovieDetailsQuery(id as string);
  const data = response.data as IMovie | undefined;
  // console.log(data);

  if (!data) {
    return null;
  }

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
