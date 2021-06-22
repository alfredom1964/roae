import { AuthGuardService } from "./guards/auth.guard";
import { LoginGuardService } from "./guards/login.guard";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  //  { path: '', redirectTo: 'inside', pathMatch: 'full' },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
    canActivate: [LoginGuardService],
  },
  {
    path: "inside",
    loadChildren: () =>
      import("./pages/inside/inside.module").then((m) => m.InsidePageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: "reporte/:id",
    loadChildren: () =>
      import("./pages/reporte/reporte.module").then((m) => m.ReportePageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: "tutorial",
    loadChildren: () =>
      import("./pages/tutorial/tutorial.module").then((m) => m.TutorialModule),
    canActivate: [AuthGuardService],

    //canLoad: [CheckTutorial]
  },
  {
    path: "about",
    loadChildren: () =>
      import("./pages/about/about.module").then((m) => m.AboutModule),
    canActivate: [AuthGuardService],

    //canLoad: [CheckTutorial]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
