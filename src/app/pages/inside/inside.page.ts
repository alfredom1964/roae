import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
import { environment } from "../../../environments/environment";
import { ToastController } from "@ionic/angular";
import { Observable, VirtualTimeScheduler } from "rxjs";

// Declaro esta constante dentro de environment para que sea accesible desde otros modulos
const { TOKEN_KEY } = environment.constants;

@Component({
  selector: "app-inside",
  templateUrl: "./inside.page.html",
  styleUrls: ["./inside.page.scss"],
})
export class InsidePage implements OnInit {
  data = "";
  reportes$: Observable<Array<any>>;
  listos$: Observable<Array<any>>;

  constructor(
    private authService: AuthService,
    private storage: Storage,
    private toastController: ToastController
  ) {}

  async ngOnInit() {
    this.listos$ = this.authService.getReportsListos(1);
    this.reportes$ = this.authService.getReports();
    const didTutorial = await this.storage.get("ion_did_tutorial");
    console.log(didTutorial);
    if (!didTutorial) {
      console.log("No ha hecho el tutorial");
    }
  }

  reloadReports() {
    // this.reportes$ = this.authService.getReports();
  }

  logout() {
    this.authService.logout().subscribe(() => {
      let toast = this.toastController.create({
        message: "Ud. salio del sistema",
        duration: 3000,
      });
      toast.then((toast) => toast.present());
    });
  }
}
