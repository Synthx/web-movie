import { NgOptimizedImage } from "@angular/common";
import { Component, type OnInit, inject, input } from "@angular/core";
import { MoviesDetailStore } from "./movies-detail.store";

@Component({
	standalone: true,
	selector: "app-movies-detail",
	templateUrl: "./movies-detail.component.html",
	styleUrl: "./movies-detail.component.scss",
	imports: [NgOptimizedImage],
	providers: [MoviesDetailStore],
})
export default class MoviesDetailComponent implements OnInit {
	id = input.required<number>();

	private store = inject(MoviesDetailStore);

	backdrop = this.store.backdrop;
	poster = this.store.poster;

	ngOnInit() {
		this.store.init(this.id());
	}
}
