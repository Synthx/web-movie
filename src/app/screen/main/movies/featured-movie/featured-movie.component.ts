import { DatePipe, JsonPipe, NgOptimizedImage } from "@angular/common";
import { Component, inject } from "@angular/core";
import { MatAnchor } from "@angular/material/button";
import { TranslateModule } from "@ngx-translate/core";
import { MoviesStore } from "../movies.store";

@Component({
	standalone: true,
	selector: "app-featured-movie",
	templateUrl: "./featured-movie.component.html",
	styleUrl: "./featured-movie.component.scss",
	imports: [NgOptimizedImage, TranslateModule, DatePipe, MatAnchor],
})
export class FeaturedMovieComponent {
	private store = inject(MoviesStore);

	featuredMovie = this.store.featuredMovie;
}
