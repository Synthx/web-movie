import { Component, inject } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { MovieCardComponent } from "../../../../widget/structure/movie-card/movie-card.component";
import { MoviesStore } from "../movies.store";

@Component({
	standalone: true,
	selector: "app-popular-movies",
	templateUrl: "./popular-movies.component.html",
	styleUrl: "./popular-movies.component.scss",
	imports: [MovieCardComponent, TranslateModule],
})
export class PopularMoviesComponent {
	private store = inject(MoviesStore);

	movies$ = this.store.popularMovies;
}
