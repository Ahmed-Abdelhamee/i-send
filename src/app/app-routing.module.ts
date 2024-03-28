import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { adminAuthGuard } from './services/admin-auth.guard';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "admin-log", component: AdminLoginComponent },
  { path: "admin-login-dashboard", loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule), canActivate: [adminAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
