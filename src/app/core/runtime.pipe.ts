import { Pipe, type PipeTransform } from "@angular/core";

@Pipe({
	standalone: true,
	name: "runtime",
})
export class RuntimePipe implements PipeTransform {
	transform(value: number): string {
		const minutes = value % 60;
		const hours = (value - minutes) / 60;

		return "null";
	}
}
