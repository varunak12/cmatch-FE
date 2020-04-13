import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { RegisterUser } from './register';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
    
      private userService: RegisterService,
     
  ) {
      // redirect to home if already logged in
     
  }
  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          
        userName: ['', Validators.required],
          emailId:['',Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      this.loading = true;
      this.userService.addUser(this.registerForm.value)
         
          .subscribe(
              data => {
                 
                  this.router.navigate(['/login']);
              
              });
  }
}