import Link from "next/link";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

type AdditionalInfoPropsType = {
  movieId: string;
};

const AdditionalInfo: FC<AdditionalInfoPropsType> = ({ movieId }) => {
  return (
    <div>
      <Link href={`/movies/${movieId}/cast`}>Cast</Link>
      <Link href={`/movies/${movieId}/reviews`}>Reviews</Link>
    </div>
  );
};

export default AdditionalInfo;
