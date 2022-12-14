import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
const Movie = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>Movie</title>
      </Head>
      Movie id: {id}
      <Link href={`/movies/${id}/cast`}>Cast</Link>
      <Link href={`/movies/${id}/reviews`}>Reviews</Link>
    </div>
  );
};

export default Movie;
