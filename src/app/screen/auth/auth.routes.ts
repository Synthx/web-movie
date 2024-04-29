import type { Routes } from "@angular/router";

export default [
	{
		path: "",
		loadComponent: () => import("./auth-layout/auth-layout.component"),
		children: [
			{
				path: "login",
				loadComponent: () => import("./login/login.component"),
			},
			{
				path: "signup",
				loadComponent: () => import("./signup/signup.component"),
			},
		],
	},
] as Routes;
