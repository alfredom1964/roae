import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class LoaderService {
  private loader;
  constructor(private loaderCtrl: LoadingController) {
    this.loader = null;
  }

  async show(message?: string) {
    if (this.loader !== null) {
      this.loader.dismiss();
      this.loader = null;
    }

    this.loader = await this.loaderCtrl.create({
      spinner: "crescent",
      message: message ? message : "Cargando...",
    });
    return this.loader.present();
  }

  hide() {
    if (this.loader !== null) {
      this.loader.dismiss();
      this.loader = null;
    }
  }
}
