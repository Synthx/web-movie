import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { AuthStore } from "../../../store/auth/auth.store";

@Component({
	standalone: true,
	selector: "app-signup",
	templateUrl: "./signup.component.html",
	styleUrl: "./signup.component.scss",
	imports: [
		ReactiveFormsModule,
		MatButton,
		MatFormFieldModule,
		MatInput,
		MatProgressSpinner,
	],
})
export default class SignupComponent {
	private formBuilder = inject(FormBuilder);
	private authStore = inject(AuthStore);

	loading = this.authStore.loading;
	signupForm = this.formBuilder.nonNullable.group({
		email: ["", [Validators.required, Validators.email]],
		nickname: ["", [Validators.required]],
		password: ["", [Validators.required]],
	});

	signup(): void {
		const { email, nickname, password } = this.signupForm.getRawValue();

		this.authStore.signup(email, password);
	}
}
