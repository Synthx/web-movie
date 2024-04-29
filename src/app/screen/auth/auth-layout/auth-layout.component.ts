import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	standalone: true,
	selector: "app-auth-layout",
	templateUrl: "./auth-layout.component.html",
	styleUrl: "./auth-layout.component.scss",
	imports: [RouterOutlet],
})
export default class AuthLayoutComponent {}
