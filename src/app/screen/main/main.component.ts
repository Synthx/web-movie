import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MainFooterComponent } from "./main-footer/main-footer.component";
import { MainNavigationComponent } from "./main-navigation/main-navigation.component";

@Component({
	standalone: true,
	selector: "app-main",
	templateUrl: "./main.component.html",
	styleUrl: "./main.component.scss",
	imports: [RouterOutlet, MainNavigationComponent, MainFooterComponent],
})
export default class MainComponent {}
