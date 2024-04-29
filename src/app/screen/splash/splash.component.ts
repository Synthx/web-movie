import { Component, type OnInit, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SplashStore } from "./splash.store";

@Component({
	standalone: true,
	selector: "app-splash",
	templateUrl: "./splash.component.html",
	styleUrl: "./splash.component.scss",
	imports: [RouterOutlet],
	providers: [SplashStore],
})
export default class SplashComponent implements OnInit {
	private store = inject(SplashStore);

	loading = this.store.loading;

	ngOnInit(): void {
		this.store.init();
	}
}
