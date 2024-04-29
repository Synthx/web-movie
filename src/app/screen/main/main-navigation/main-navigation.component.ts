import { Component, inject } from "@angular/core";
import { MatAnchor, MatButton } from "@angular/material/button";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { AuthStore } from "../../../store/auth/auth.store";

@Component({
	standalone: true,
	selector: "app-main-navigation",
	templateUrl: "./main-navigation.component.html",
	styleUrl: "./main-navigation.component.scss",
	imports: [
		TranslateModule,
		RouterLink,
		RouterLinkActive,
		MatAnchor,
		MatButton,
	],
})
export class MainNavigationComponent {
	private authStore = inject(AuthStore);

	user = this.authStore.user;

	logout(): void {
		this.authStore.logout();
	}
}
