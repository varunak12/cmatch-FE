import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { HttpClient } from '@angular/common/http';

import { LoginService } from '../login.service';

@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginform : FormGroup;
 constructor(public formBuilder : FormBuilder,
   private httpClient : HttpClient,
   private loginService : LoginService,
   private route:Router
   ) {
   console.log("constructor Called");
  this.loginform =   formBuilder.group({
    emailId :
      ['',Validators.required],
    password : ['',Validators.required]
  })
   console.log("constructor Called");
}
ngOnInit() {
   console.log("Ng OnInit called");}
   loginUser(){
 console.log("Login  Submit");
  this.loginService.authenticationLogin(this.loginform.value).
 subscribe(data=>{
   if(data.statusText=="OK")
   {
     console.log("Routing Works");
      
      this.route.navigate(['/home'])
   
   }
  });
}
}