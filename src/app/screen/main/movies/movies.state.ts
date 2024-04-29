import type { Movie } from "../../../data/model/movie";
import type { MovieDetail } from "../../../data/model/movie-detail";
import type { Nullable } from "../../../data/type/nullable";

type MoviesState = {
	featuredMovie: Nullable<MovieDetail>;
	popularMovies: Movie[];
};

export const initialMoviesState: MoviesState = {
	featuredMovie: null,
	popularMovies: [],
};
