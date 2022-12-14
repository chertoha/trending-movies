import Head from "next/head";
import { useRouter } from "next/router";

const Cast = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Head>
        <title>Cast id: {id}</title>
      </Head>
      Cast
    </div>
  );
};

export default Cast;
