import Link from "next/link";
import { useRouter } from "next/router";

const TestMovie = () => {
  const router = useRouter();
  const { id } = router.query;
  //   console.log(router);

  return (
    <div>
      <div>Test Movie id: {id}</div>
      <div>
        <Link href={`/test/${id}/cast`}>cast</Link>
      </div>
      <div>
        <Link href={`/test/${id}/review`}>review</Link>
      </div>
    </div>
  );
};

export default TestMovie;
