import Head from "next/head";
import { useRouter } from "next/router";

const Reviews = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>Reviews id: {id}</title>
      </Head>
      Reviews
    </div>
  );
};

export default Reviews;
