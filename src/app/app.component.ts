import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { NetworkService } from "./services/network.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  storage: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router,
    private network: NetworkService
  ) {
    this.initializeApp();
    this.network.listenNetworkChanges();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openTutorial() {
    // this.menu.enable(false);
    this.storage.set("ion_did_tutorial", true);
    this.router.navigateByUrl("/tutorial");
  }
}
