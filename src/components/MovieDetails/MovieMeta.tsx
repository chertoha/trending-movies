import { FC } from "react";
import { IGenre, IMovie } from "types";

type MovieMetaPropsType = {
  title: string;
  date: number | null | undefined;
  voteAverage: string | number | null | undefined;
  voteCount: string | number | undefined;
  overview: string;
  genres: IGenre[];
};

const MovieMeta: FC<MovieMetaPropsType> = ({
  title,
  date = null,
  voteAverage = null,
  voteCount = null,
  overview = "",
  genres = null,
}) => {
  return (
    <div>
      <div>
        {title ? `${title} ` : `No title info`}
        {date && `(${date})`}
      </div>

      {voteAverage && voteCount && (
        <div>
          Vote/votes : {voteAverage} / {voteCount}
        </div>
      )}

      {overview && (
        <>
          <div>Overview</div>
          <div>{overview}</div>
        </>
      )}

      {genres && genres.length > 0 && (
        <>
          <div>Genres</div>
          <div>
            {genres.map(({ id, name }, i, arr) => (
              <span key={id}>
                {name}
                {i !== arr.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MovieMeta;
