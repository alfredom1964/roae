import { Platform, AlertController } from "@ionic/angular";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Storage } from "@ionic/storage";
import { environment } from "../../environments/environment";
import { tap, catchError, map } from "rxjs/operators";
import { BehaviorSubject, from, of } from "rxjs";
import { Router } from "@angular/router";
import { LoadingController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";
import { SMS } from "@ionic-native/sms/ngx";
import { NetworkService } from "./network.service";
import { LoaderService } from "./loader.service";

// Declaro esta constante dentro de environment para que sea accesible desde otros modulos
const { TOKEN_KEY, USER_KEY } = environment.constants;

interface ApiValidResponse {
  res: boolean;
  message: string;
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  url = environment.url;
  usuario = "";
  clave = "";
  loading: HTMLIonLoadingElement;
  reportes = [];
  preguntas = [];
  listos = [];
  fecha = [];
  hora = [];

  authenticationState = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private helper: JwtHelperService,
    private storage: Storage,
    private plt: Platform,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private sms: SMS,
    private networkService: NetworkService,
    private loaderService: LoaderService
  ) {
    this.init();
  }

  async init() {
    await this.plt.ready();
    await this.storage.create();
    this.loading = await this.loadingController.create({
      message: "Cargando...",
    });
    // // Si estamos en una ruta que no se login, mostramos loader, luego de resolver si el token es valido o no, el metodo checkToken quita el loader
    // if (this.router.url !== "/login") {
    //   await this.loading.present();
    //   setTimeout(() => {
    //     this.loading.dismiss();
    //   }, 5000);
    // }
  }

  // Este metodo se llama desde el guard de login, si no tenemos el token quiere decir que podemos entrar a la pagina del login
  getToken() {
    return from(this.storage.get(TOKEN_KEY)).pipe(
      map((token) => {
        if (!token) {
          return true;
        }
        this.router.navigate(["inside"]);
        return false;
      }),
      catchError((err) => {
        console.log("Tuvimos error de token", err);
        throw new Error(err);
      })
    );
  }

  checkToken() {
    // Muestra la splashscreen mientras hacemos la peticion
    return this.http.get(`${this.url}/view`).pipe(
      map((response: ApiValidResponse) => {
        if (response.res) {
          this.loading.dismiss();
          return true;
        }
      }),
      catchError((e) => {
        this.loading.dismiss();
        if (e.status === 401) {
          this.storage.remove(TOKEN_KEY);
          this.router.navigate(["login"]);
        }
        throw new Error(e);
      })
    );
  }

  checkReports() {
    // Muestra la splashscreen mientras hacemos la peticion
    return this.http.get(`${this.url}/reports`).pipe(
      map((response: ApiValidResponse) => {
        if (response.res) {
          // Si es valida ocultamos la splashscreen
          this.loading.dismiss();
          return true;
        }
      }),
      catchError((e) => {
        console.log("Error en checkReports");
        this.loading.dismiss();
        if (e.status === 401) {
          this.storage.remove(TOKEN_KEY);
          this.router.navigate(["login"]);
        }
        throw new Error(e);
      })
    );
  }

  register(credentials) {
    return this.http.post(`${this.url}/login`, credentials).pipe(
      catchError((e) => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  getUsername() {
    return this.storage.get(USER_KEY);
  }

  async login(credentials) {
    await this.loaderService.show();
    return this.http
      .post(`${this.url}/login`, credentials)
      .pipe(
        tap(async (result: ApiValidResponse) => {
          if (result.res === false) {
            this.loaderService.hide();
            this.showAlert("Credenciales inválidas o fallo en la conexión");
            return;
          }
          // Recuerda que tambien puedes hacer result.token y escribes menos
          this.storage.set(USER_KEY, credentials.usuario);
          const TOKEN_NEW = this.storage.set(TOKEN_KEY, result["token"]);
          let toast = this.toastController.create({
            message: "Usuario autorizado!!",
            duration: 6000,
          });
          toast.then((toast) => toast.present());
          this.router.navigate(["tutorial"]);
          // Dejo esto comentado porque el token que devuelven no es un JWT.
          // this.usuario = this.helper.decodeToken(result['token']);
          this.loaderService.hide();
          this.authenticationState.next(true);
        }),
        catchError(async (e) => {
          this.loaderService.hide();
          this.showAlert("Credenciales inválidas o fallo en la conexión");
          throw new Error(JSON.stringify(e));
        })
      )
      .subscribe();
  }

  logout() {
    this.loading.present();
    return this.http.post(`${this.url}/logout`, {}).pipe(
      tap((res) => {
        console.log(res);
        this.storage
          .remove(TOKEN_KEY)
          .then(() => {
            this.router.navigate(["login"]);
            this.authenticationState.next(false);
            this.loading.dismiss();
            return this.storage.remove(USER_KEY);
          })
          .then(() => {
            console.log("Logout done!");
          });
      }),
      catchError((e) => {
        this.loading.dismiss();
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  getSpecialData() {
    // Este vendria siendo el metodo que necesitas aqui para verificar tu token
    // No tienes que meter el header por cada request para autenticarla, el AuthInterceptor se encarga de poner el header si lo encuentra para cada request
    return this.checkToken();
  }

  getReports() {
    this.loading.present();
    return this.http.get<any>(`${this.url}/reports`).pipe(
      tap(() => {
        let toast = this.toastController.create({
          message: "Reportes cargados",
          duration: 3000,
        });
        this.loading.dismiss();
        toast.then((toast) => toast.present());
      }),
      map((response) => {
        return response.reportes;
      }),
      catchError((e) => {
        console.log("ERROR EN GET REPORTS");
        this.loading.dismiss();
        this.showAlert("Error buscando reportes");
        throw new Error(e);
      })
    );
  }

  getReportsListos(id) {
    this.loading.present();
    return this.http.get<any>(`${this.url}/reportado?id=` + id).pipe(
      tap(() => {
        let toast = this.toastController.create({
          message: "Reportes cargados",
          duration: 3000,
        });
        this.loading.dismiss();
        toast.then((toast) => toast.present());
      }),
      map((response) => {
        return response.listos;
      }),
      catchError((e) => {
        console.log("ERROR EN GET REPORTS LISTOS");
        this.loading.dismiss();
        this.showAlert("Error buscando reportes");
        throw new Error(e);
      })
    );
  }

  getReportDetail(id) {
    return this.http.get<any>(`${this.url}/preguntas?id=` + id).pipe(
      tap(() => {
        let toast = this.toastController.create({
          message: "Formulario cargado",
          duration: 3000,
        });
        toast.then((toast) => toast.present());
      }),
      map((response) => {
        return response.preguntas;
      }),
      catchError((e) => {
        console.log("ERROR EN REPORT DETAIL");
        this.loading.dismiss();
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: "Error",
      buttons: ["OK"],
    });
    alert.then((alert) => alert.present());
  }

  retryPostReporte({ reporteId }) {
    console.log("Suscribimos??");
    const subscription = this.networkService.networkConnection$.subscribe(
      async (connection) => {
        console.log("El valor de connection es", connection);
        if (connection) {
          const reporte = await this.storage.get(`reporte-${reporteId}`);
          console.log("El reporte seria", reporte);
          console.log(
            "Enviamos porque volvio la conexion",
            "el reporte id es",
            reporteId
          );
          this.postReporte(JSON.parse(reporte));
          subscription.unsubscribe();
        } else {
          console.log("Dejamos de tenerla");
        }
      }
    );
    return of("Esperamos conexion");
  }

  sendReporte({ request, reporteId, msj }) {
    console.log("Send reporte", reporteId);
    return this.http.post(`${this.url}/mensaje`, request).pipe(
      tap((response) => {
        let toast = this.toastController.create({
          message: "Reporte enviado correctamente",
          duration: 6000,
        });
        toast.then((toast) => toast.present());
        this.router.navigate(["inside"]);
        this.sms.send("04126230595", msj);
      }),
      catchError((err) => {
        console.log("ERROR EN SEND REPORTE");
        console.log("Tuvimos un error", err);
        alert(err.message);
        throw new Error(err);
      })
    );
  }

  postReporte({ form, coords, reporteId }) {
    const formMeta = Object.keys(form)
      .filter((_, index) => +index < 2)
      .map((key) => form[key]);
    let [usuarioId, fechahora] = formMeta;
    fechahora = fechahora.split(" ");
    let fecha = fechahora[0].split("/");
    let hora = fechahora[1].split(":");
    let msj = `roae r${reporteId} i${usuarioId} h${hora[0]}${hora[1]}`;
    const reportesSeleccion = [1, 3, 5];
    const reportesUnicoValor = [2, 4];

    // Este es para parsear del formulario con los checkbox
    if (reportesSeleccion.includes(+reporteId)) {
      const formData = Object.keys(form)
        // Filtramos los primeros dos elementos que son usuarioId y hora
        .filter((key, index) => +index > 1 && typeof form[key] === "boolean")
        // Hacemos el indice id, asi evitamos usar la numeracion que viene de preguntas$
        .map((key, index) => ({ id: index + 1, value: form[key] }));
      // Filtramos las que sean falsas
      const respuestas = formData
        .filter((item) => item.value)
        .map((item) => (item.id > 9 ? item.id : `0${item.id}`));
      const respuestasString = respuestas.join("");
      msj = `${msj} s${respuestasString}`;
    }

    // Este es para parsear del formulario con una solo input
    if (reportesUnicoValor.includes(+reporteId)) {
      // Asumimos que el unico valor numerico en el formulario es el que estamos buscando
      const key = Object.keys(form).find(
        (key) => typeof form[key] === "number"
      );
      const value = form[key];
      msj = `${msj} n${value}`;
    }

    const request = {
      msj,
      hora: `${hora[0]}${hora[1]}`,
      fecha: `${fecha[2]}-${fecha[1]}-${fecha[0]}`,
      fuenteid: "1",
      tipomensajeid: "1",
      cuestid: reporteId,
      ...coords,
    };

    if (this.networkService.networkConnection$.value) {
      return this.sendReporte({ request, reporteId, msj });
    } else {
      this.showAlert(
        "No se ha encontrado conexión a internet, abriremos la aplicación de mensajería en breves con el resultado de su formulario para enviar vía SMS"
      );
      setTimeout(() => {
        // Aquí tendrás que cambiar el numero por el que toca
        this.openSms({ message: msj, number: "04126230595" });
      }, 5000);
    }
  }

  openSms({ message, number }) {
    const link = document.createElement("a");
    link.href = `sms://${number}?body=${message}`;
    link.click();
    return of(true);
  }
}
