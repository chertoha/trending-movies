import AdditionalInfo from "components/AdditionalInfo";
import MovieDetails from "components/MovieDetails";
import { FC } from "react";
import { IMovie } from "types";

type MovieDetailsLayoutPropsType = {
  movieData: IMovie;
  movieId: string;
};

const MovieDetailsLayout: FC<MovieDetailsLayoutPropsType> = ({
  movieData,
  movieId,
}) => {
  return (
    <div>
      <MovieDetails data={movieData} />
      <br />
      <hr />
      <AdditionalInfo movieId={movieId} />
      <br />
      <hr />
    </div>
  );
};

export default MovieDetailsLayout;
