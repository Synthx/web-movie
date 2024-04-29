import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import type { Observable } from "rxjs";
import { env } from "../../../env/env";
import type { Movie } from "../model/movie";
import type { MovieDetail } from "../model/movie-detail";
import type { Page } from "../model/page";

@Injectable({
	providedIn: "root",
})
export class MovieService {
	private http = inject(HttpClient);

	findAllPopular(page = 1): Observable<Page<Movie>> {
		const params = new HttpParams()
			.set("include_adult", false)
			.set("include_video", false)
			.set("sort_by", "popularity.desc")
			.set("page", page);

		return this.http.get<Page<Movie>>(`${env.api.url}/discover/movie`);
	}

	find(id: number): Observable<MovieDetail> {
		return this.http.get<MovieDetail>(`${env.api.url}/movie/${id}`);
	}
}
