import { inject } from "@angular/core";
import type {
	ActivatedRouteSnapshot,
	CanActivateFn,
	RouterStateSnapshot,
} from "@angular/router";
import { AuthStore } from "../store/auth/auth.store";

export const authGuard: CanActivateFn = (
	next: ActivatedRouteSnapshot,
	state: RouterStateSnapshot,
) => {
	const authStore = inject(AuthStore);

	return true;
};
