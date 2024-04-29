import type {
	HttpEvent,
	HttpHandlerFn,
	HttpRequest,
} from "@angular/common/http";
import type { Observable } from "rxjs";
import { env } from "../../env/env";

export function tokenInterceptor(
	req: HttpRequest<unknown>,
	next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
	const newRequest = req.clone({
		headers: req.headers.set("Authorization", `Bearer ${env.api.key}`),
	});

	return next(newRequest);
}
