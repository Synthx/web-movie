import {
	type ApplicationConfig,
	LOCALE_ID,
	importProvidersFrom,
	ɵprovideZonelessChangeDetection as provideZonelessChangeDetection,
} from "@angular/core";
import { provideRouter, withComponentInputBinding } from "@angular/router";

import {
	IMAGE_LOADER,
	type ImageLoaderConfig,
	registerLocaleData,
} from "@angular/common";
import {
	HttpClient,
	provideHttpClient,
	withInterceptors,
} from "@angular/common/http";
import localeFr from "@angular/common/locales/fr";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import {
	getRemoteConfig,
	provideRemoteConfig,
} from "@angular/fire/remote-config";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { provideToastr } from "ngx-toastr";
import { env } from "../env/env";
import { routes } from "./app.routes";
import { tokenInterceptor } from "./core/token.interceptor";

registerLocaleData(localeFr);

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

export const appConfig: ApplicationConfig = {
	providers: [
		provideZonelessChangeDetection(),
		provideHttpClient(withInterceptors([tokenInterceptor])),
		provideRouter(routes, withComponentInputBinding()),
		provideAnimationsAsync(),
		provideToastr(),
		importProvidersFrom(
			provideFirebaseApp(() => initializeApp(env.firebase)),
			provideAuth(() => getAuth()),
			provideRemoteConfig(() => getRemoteConfig()),
			TranslateModule.forRoot({
				defaultLanguage: "fr",
				loader: {
					provide: TranslateLoader,
					useFactory: HttpLoaderFactory,
					deps: [HttpClient],
				},
			}),
		),
		{ provide: LOCALE_ID, useValue: "fr-FR" },
		{
			provide: IMAGE_LOADER,
			useValue: (config: ImageLoaderConfig) => {
				return `https://image.tmdb.org/t/p/original/${config.src}`;
			},
		},
	],
};
