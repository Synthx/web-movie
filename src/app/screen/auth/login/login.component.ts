import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { AuthStore } from "../../../store/auth/auth.store";

@Component({
	standalone: true,
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.scss",
	imports: [
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInput,
		MatButton,
		MatProgressSpinner,
	],
})
export default class LoginComponent {
	private formBuilder = inject(FormBuilder);
	private authStore = inject(AuthStore);

	loading = this.authStore.loading;
	loginForm = this.formBuilder.nonNullable.group({
		email: ["", [Validators.required, Validators.email]],
		password: ["", [Validators.required]],
	});

	login(): void {
		const { email, password } = this.loginForm.getRawValue();

		this.authStore.login(email, password);
	}
}
