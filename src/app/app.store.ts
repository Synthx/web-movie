import { Injectable, inject } from "@angular/core";
import {
	NavigationCancel,
	NavigationEnd,
	NavigationError,
	NavigationStart,
	Router,
} from "@angular/router";
import { patchState, signalStore, withState } from "@ngrx/signals";
import { withObserver } from "./store/store.observer";

@Injectable()
export class AppStore extends signalStore(
	withState({ loading: false }),
	withObserver("AppStore"),
) {
	private router = inject(Router);

	constructor() {
		super();

		this.router.events.subscribe((event) => {
			if (event instanceof NavigationStart) {
				patchState(this, { loading: true });
			}

			if (
				event instanceof NavigationError ||
				event instanceof NavigationEnd ||
				event instanceof NavigationCancel
			) {
				patchState(this, { loading: false });
			}
		});
	}
}
