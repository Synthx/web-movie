import { Component, type OnInit, inject } from "@angular/core";
import { FeaturedMovieComponent } from "./featured-movie/featured-movie.component";
import { MoviesStore } from "./movies.store";
import { PopularMoviesComponent } from "./popular-movies/popular-movies.component";

@Component({
	standalone: true,
	selector: "app-movies",
	templateUrl: "./movies.component.html",
	styleUrl: "./movies.component.scss",
	imports: [FeaturedMovieComponent, PopularMoviesComponent],
	providers: [MoviesStore],
})
export default class MoviesComponent implements OnInit {
	private store = inject(MoviesStore);

	ngOnInit(): void {
		this.store.init();
	}
}
