import MoviesList from "components/MoviesList";
import Head from "next/head";
import { useRouter } from "next/router";
import { SyntheticEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPrevPage } from "redux/prevPageSlice";
import { fetchSearchedMovies } from "services/api";
import { StatusType } from "types";
import { STATUS } from "utils/config";

const Movies = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE) as [
    status: StatusType,
    setStatus: (val: StatusType) => void
  ];
  const [error, setError] = useState(null) as [
    error: string | null,
    setError: (val: string | null) => void
  ];

  const { query } = router.query;

  // dispatch(setPrevPage(router.asPath));
  // console.log(router);

  useEffect(() => {
    if (!query) return;
    setStatus(STATUS.PENDING);
    fetchSearchedMovies(query as string)
      .then((data) => {
        setMovies(data.results);
        setStatus(STATUS.RESOLVED);
      })
      .catch((error) => {
        setError(error.message);
        setStatus(STATUS.REJECTED);
      });
  }, [query]);

  const onSearch = (e: SyntheticEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formElements = form.elements as any;
    const searchValue = formElements.search.value as string;

    form.reset();
    router.push({
      pathname: "/movies",
      query: searchValue === "" ? {} : { query: searchValue },
    });
  };

  return (
    <div>
      <Head>
        <title>Movies</title>
      </Head>
      Movies page (SEARCH HERE)
      <form onSubmit={onSearch}>
        <input type="text" name="search" placeholder="Search movie" />
        <button type="submit">Search</button>
      </form>
      {status === STATUS.PENDING && <div>Loading ...</div>}
      {status === STATUS.REJECTED && <div>Error: {error}</div>}
      {status === STATUS.RESOLVED && <MoviesList movies={movies} />}
    </div>
  );
};

export default Movies;
