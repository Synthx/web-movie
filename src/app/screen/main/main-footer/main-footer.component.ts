import { Component } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
	selector: "app-main-footer",
	standalone: true,
	imports: [TranslateModule],
	templateUrl: "./main-footer.component.html",
	styleUrl: "./main-footer.component.scss",
})
export class MainFooterComponent {}
