export interface IMovie {
  id: number | string;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  genre_ids: number[];
  release_date: Date;
  vote_average: number;
  vote_count: number;
}

export type FetchResultType = {
  page: number;
  results: IMovie[];
  total_results: number;
};
