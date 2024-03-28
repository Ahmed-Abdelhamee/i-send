import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  AdminUserID:any="admin";
  loginAdminError:boolean=false;

  constructor(private auth:Auth ,private route:Router) { }

  login(Admin:any){
     return signInWithEmailAndPassword(this.auth,Admin.email,Admin.pass).then((user)=>{
      sessionStorage.setItem("Admin","you is admin");
      this.route.navigate(["/admin-login-dashboard"])
    })
  }
}
