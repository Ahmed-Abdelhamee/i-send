import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAuthService } from 'src/app/services/admin-auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  error:boolean=false;
  
  constructor(private fb:FormBuilder ,private route:Router,private auth:AdminAuthService) { 
  }

  login=this.fb.group({
    email:["",Validators.required],
    pass:["",Validators.required],
  })

  submit(){
    this.auth.login(this.login.value).catch(()=>{
      sessionStorage.setItem("Admin","is False not Admin")
      this.error=true;
    });
  }
}