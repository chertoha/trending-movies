import Image from "next/image";
import { FC } from "react";
import { ICast } from "types";
import { BASE_IMG_URL } from "utils/config";
import defautlAvatar from "utils/defaultAvatar";
import ActorMeta from "./ActorMeta";

type CastListPropsType = {
  cast: ICast[];
};

const CastList: FC<CastListPropsType> = ({ cast }) => {
  if (cast.length === 0) {
    return <p>{`We don't have cast information for this movie.`}</p>;
  }

  return (
    <ul>
      {cast.map(
        ({
          credit_id,
          gender = 0,
          name = "No info",
          character = "No info",
          profile_path,
        }) => {
          const imageSrc = profile_path
            ? BASE_IMG_URL + profile_path
            : defautlAvatar(gender);

          return (
            <li key={credit_id}>
              <Image src={imageSrc} alt={name} width={100} height={100} />
              <ActorMeta name={name} character={character} />
            </li>
          );
        }
      )}
    </ul>
  );
};

export default CastList;
