import Link from "next/link";
import { FC } from "react";
import { IMovie } from "types";

type MoviesListPropsType = {
  movies: IMovie[];
};

const MoviesList: FC<MoviesListPropsType> = ({ movies }) => {
  if (!movies) {
    return;
  }

  if (movies.length === 0) {
    return <p>Sorry, We found nothing. </p>;
  }

  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link href={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
