import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AppStore } from "./app.store";
import { AuthStore } from "./store/auth/auth.store";

@Component({
	standalone: true,
	selector: "app-root",
	template: `
        <router-outlet/>`,
	imports: [RouterOutlet],
	providers: [AuthStore, AppStore],
})
export class AppComponent {
	private store = inject(AppStore);
}
