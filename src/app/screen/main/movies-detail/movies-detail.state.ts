import type { Movie } from "../../../data/model/movie";
import type { MovieDetail } from "../../../data/model/movie-detail";

type MoviesDetailState = {
	movie: MovieDetail | null;
	preview: Movie | null;
};

export const initialMoviesDetailState: MoviesDetailState = {
	movie: null,
	preview: null,
};
