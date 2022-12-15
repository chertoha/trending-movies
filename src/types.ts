export interface IGenre {
  id: number;
  name: string;
}

export interface IMovie {
  id: number | string;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  genres: IGenre[];
  release_date: string;
  vote_average: number;
  vote_count: number;
}

export type FetchResultType = {
  page: number;
  results: IMovie[];
  total_results: number;
};
