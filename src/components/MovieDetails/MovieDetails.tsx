import ReturnLink from "components/ReturnLink";
import Image from "next/image";
import Link from "next/link";
import imagePlug from "../../../public/images/movieCardPlug.jpg";
import { FC } from "react";
import { IMovie } from "types";
import MovieMeta from "./MovieMeta";
import { useRouter } from "next/router";
import { BASE_IMG_URL } from "utils/config";

type MovieDetailsPropsType = {
  data: IMovie | undefined;
  backPath: string;
};

const MovieDetails: FC<MovieDetailsPropsType> = ({ data, backPath }) => {
  // console.log(data);
  const router = useRouter();

  if (!data) {
    return null;
  }
  const {
    original_title,
    release_date,
    vote_average,
    vote_count,
    overview,
    genres,
    poster_path,
  } = data;

  // const imageSrc = poster_path ? BASE_IMG_URL + poster_path : imagePlugSrc;

  return (
    <>
      <ReturnLink to={backPath} text="Go back" />

      <h1 hidden> Movie details</h1>

      <div>
        <Image src={imagePlug} alt={original_title} width={200} height={200} />
        <MovieMeta
          title={original_title}
          date={new Date(release_date).getFullYear()}
          voteAverage={vote_average.toFixed(1)}
          voteCount={vote_count}
          overview={overview}
          genres={genres}
        />
      </div>

      {/* <AdditionalInfo location={locationForBackLink} /> */}
    </>
  );
};

export default MovieDetails;
