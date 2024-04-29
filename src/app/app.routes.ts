import type { Routes } from "@angular/router";
import SplashComponent from "./screen/splash/splash.component";

export const routes: Routes = [
	{
		path: "",
		component: SplashComponent,
		children: [
			{
				path: "",
				loadComponent: () => import("./screen/main/main.component"),
				children: [
					{
						path: "",
						redirectTo: "movies",
						pathMatch: "full",
					},
					{
						path: "movies",
						loadComponent: () =>
							import("./screen/main/movies/movies.component"),
					},
					{
						path: "movies/:id",
						loadComponent: () =>
							import("./screen/main/movies-detail/movies-detail.component"),
					},
					{
						path: "auth",
						loadChildren: () => import("./screen/auth/auth.routes"),
					},
				],
			},
		],
	},
];
