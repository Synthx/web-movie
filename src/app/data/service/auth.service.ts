import { Injectable, inject } from "@angular/core";
import {
	Auth,
	type User,
	authState,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "@angular/fire/auth";
import { type Observable, first, from, map } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	private auth = inject(Auth);

	current(): Observable<User | null> {
		return authState(this.auth).pipe(first());
	}

	login(email: string, password: string): Observable<User> {
		return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
			map((credentials) => credentials.user),
		);
	}

	signup(email: string, password: string): Observable<User> {
		return from(
			createUserWithEmailAndPassword(this.auth, email, password),
		).pipe(map((credentials) => credentials.user));
	}

	logout(): Observable<void> {
		return from(this.auth.signOut());
	}
}
