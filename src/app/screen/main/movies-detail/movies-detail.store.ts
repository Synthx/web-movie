import { Injectable, computed, inject } from "@angular/core";
import { patchState, signalStore, withState } from "@ngrx/signals";
import { MovieService } from "../../../data/service/movie.service";
import { withObserver } from "../../../store/store.observer";
import { initialMoviesDetailState } from "./movies-detail.state";

@Injectable()
export class MoviesDetailStore extends signalStore(
	withState(initialMoviesDetailState),
	withObserver("MoviesDetailStore"),
) {
	private movieService = inject(MovieService);

	backdrop = computed(() => this.preview()?.backdrop_path);
	poster = computed(() => this.preview()?.poster_path);
	title = computed(() => this.preview()?.title);

	init(id: number): void {
		patchState(this, { preview: history.state });
		console.log("id", id);
		console.log("state", history.state);
	}
}
