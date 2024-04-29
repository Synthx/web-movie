import { Injectable, inject } from "@angular/core";
import { RemoteConfig, getNumber } from "@angular/fire/remote-config";
import { patchState, signalStore, withState } from "@ngrx/signals";
import { forkJoin } from "rxjs";
import { MovieService } from "../../../data/service/movie.service";
import { withObserver } from "../../../store/store.observer";
import { initialMoviesState } from "./movies.state";

@Injectable()
export class MoviesStore extends signalStore(
	withState(initialMoviesState),
	withObserver("MoviesStore"),
) {
	private movieService = inject(MovieService);
	private remoteConfig = inject(RemoteConfig);

	init(): void {
		const featuredMovieId = getNumber(this.remoteConfig, "featuredMovieId");
		forkJoin([
			this.movieService.findAllPopular(),
			this.movieService.find(featuredMovieId),
		]).subscribe(([page, featuredMovie]) => {
			patchState(this, {
				popularMovies: page.results,
				featuredMovie: featuredMovie,
			});
		});
	}
}
