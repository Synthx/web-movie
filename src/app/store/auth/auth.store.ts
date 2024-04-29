import { Injectable, inject } from "@angular/core";
import type { User } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { patchState, signalStore, withState } from "@ngrx/signals";
import { ToastrService } from "ngx-toastr";
import { type Observable, tap } from "rxjs";
import { AuthService } from "../../data/service/auth.service";
import { withObserver } from "../store.observer";
import { initialAuthState } from "./auth.state";

@Injectable()
export class AuthStore extends signalStore(
	withState(initialAuthState),
	withObserver("AuthStore"),
) {
	private authService = inject(AuthService);
	private router = inject(Router);

	private toastrService = inject(ToastrService);

	init(): Observable<User | null> {
		return this.authService
			.current()
			.pipe(tap((user) => patchState(this, { user })));
	}

	login(email: string, password: string): void {
		patchState(this, { loading: true });
		this.authService.login(email, password).subscribe({
			next: (user) => {
				patchState(this, { user, loading: false });
				this.router.navigate(["/"]);
			},
			error: (err) => {
				console.error(err);
				patchState(this, { loading: false });
			},
		});
	}

	signup(email: string, password: string): void {
		patchState(this, { loading: true });
		this.authService.signup(email, password).subscribe({
			next: (user) => {
				patchState(this, { user, loading: false });
				this.router.navigate(["/"]);
			},
			error: (err) => {
				console.error(err);
				patchState(this, { loading: false });
			},
		});
	}

	logout(): void {
		this.authService.logout().subscribe(() => {
			patchState(this, { user: null });
			this.router.navigate(["/"]);
		});
	}
}
