import { DatePipe, NgOptimizedImage } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import type { Movie } from "../../../data/model/movie";

@Component({
	standalone: true,
	selector: "app-movie-card",
	templateUrl: "./movie-card.component.html",
	styleUrl: "./movie-card.component.scss",
	imports: [RouterLink, NgOptimizedImage, DatePipe],
})
export class MovieCardComponent {
	@Input({ required: true })
	movie!: Movie;
}
