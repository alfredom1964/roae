import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { Storage } from "@ionic/storage";
import { from, Observable, of, throwError } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { AlertController } from "@ionic/angular";
import { createHostListener } from "@angular/compiler/src/core";

const { TOKEN_KEY } = environment.constants;

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private storage: Storage,
    public alertController: AlertController
  ) {}

  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: "Error",
      buttons: ["OK"],
    });
    alert.then((alert) => alert.present());
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(this.storage.get(TOKEN_KEY)).pipe(
      switchMap((token) => {
        // Si no hay token pasamos la request directamente
        if (!token) {
          return next.handle(req);
        }
        // Si lo tenemos, clonamos la request, enchufamos el token en los headers y la pasamos al handler
        const authReq = req.clone({
          headers: req.headers.set("api_token", token),
        });
        return next.handle(authReq);
      }),
      catchError((err) => {
        if (err.status === 0 && err.error instanceof ProgressEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          this.showAlert("Error con conexión intente mas tarde.");
        }
        return throwError(err);
      })
    );
  }
}
