import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ReportePageRoutingModule } from "./reporte-routing.module";

import { ReportePage } from "./reporte.page";
import { Network } from "@ionic-native/network/ngx";
import { Storage } from "@ionic/storage";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReportePageRoutingModule,
  ],
  declarations: [ReportePage],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [Storage, Network],
})
export class ReportePageModule {}
