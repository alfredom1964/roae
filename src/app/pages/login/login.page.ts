import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { LoadingController, ToastController } from "@ionic/angular";
import { UniqueDeviceID } from "@ionic-native/unique-device-id/ngx";
import { Uid } from "@ionic-native/uid/ngx";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { Plugins } from "@capacitor/core";
const { Device } = Plugins;

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  credentialsForm: FormGroup;
  storage: any;
  Imei: any;

  deviceId: any;

  password_type: string = "password";

  togglePasswordMode() {
    this.password_type = this.password_type === "text" ? "password" : "text";
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public loadingController: LoadingController,
    private toastController: ToastController,
    private uniqueDeviceID: UniqueDeviceID,
    private uid: Uid,
    private androidPermissions: AndroidPermissions
  ) {}

  async ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.minLength(6)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
    const info = await Device.getInfo();
    this.deviceId = info.uuid;
    this.getPermission();

    // console.log(this.deviceId);
  }

  async onSubmit() {
    await this.authService.login({
      clave: this.credentialsForm.value.password,
      usuario: this.credentialsForm.value.email,
    });
  }

  revisar() {
    this.authService.getSpecialData().subscribe();
  }

  register() {
    this.authService
      .register(this.credentialsForm.value)
      .subscribe(async (res) => {
        // Call Login to automatically login the new user
        await this.authService.login(this.credentialsForm.value);
      });
  }

  getPermission() {
    this.androidPermissions
      .checkPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE)
      .then((res) => {
        if (res.hasPermission) {
        } else {
          this.androidPermissions
            .requestPermission(
              this.androidPermissions.PERMISSION.READ_PHONE_STATE
            )
            .then((res) => {
              alert("Persmission Granted Please Restart App!");
            })
            .catch((error) => {
              alert("Error! " + error);
            });
        }
      })
      .catch((error) => {
        alert("Error! " + error);
      });
  }

  getID_UID(type) {
    if (type == "IMEI") {
      return this.uid.IMEI;
    } else if (type == "ICCID") {
      return this.uid.ICCID;
    } else if (type == "IMSI") {
      return this.uid.IMSI;
    } else if (type == "MAC") {
      return this.uid.MAC;
    } else if (type == "UUID") {
      return this.uid.UUID;
    }
  }

  async getImei() {
    const { hasPermission } = await this.androidPermissions.checkPermission(
      this.androidPermissions.PERMISSION.READ_PHONE_STATE
    );

    if (!hasPermission) {
      const result = await this.androidPermissions.requestPermission(
        this.androidPermissions.PERMISSION.READ_PHONE_STATE
      );

      if (!result.hasPermission) {
        throw new Error("Permissions required");
      }

      // ok, a user gave us permission, we can get him identifiers after restart app
      return;
    }

    return this.uid.IMEI;
  }
}
