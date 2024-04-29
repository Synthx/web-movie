import type { User } from "@angular/fire/auth";

type AuthState = {
	initialized: boolean;
	loading: boolean;
	user: null | User;
};

export const initialAuthState: AuthState = {
	initialized: false,
	loading: false,
	user: null,
};
