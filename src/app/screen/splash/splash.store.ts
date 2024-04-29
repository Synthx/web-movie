import { Injectable, inject } from "@angular/core";
import { RemoteConfig, fetchAndActivate } from "@angular/fire/remote-config";
import { patchState, signalStore, withState } from "@ngrx/signals";
import { forkJoin, from } from "rxjs";
import { AuthStore } from "../../store/auth/auth.store";
import { withObserver } from "../../store/store.observer";
import { initialSplashState } from "./splash.state";

@Injectable()
export class SplashStore extends signalStore(
	withState(initialSplashState),
	withObserver("SplashStore"),
) {
	private remoteConfig = inject(RemoteConfig);
	private authStore = inject(AuthStore);

	init(): void {
		forkJoin([
			from(fetchAndActivate(this.remoteConfig)),
			this.authStore.init(),
		]).subscribe(() => {
			patchState(this, { loading: false });
		});
	}
}
