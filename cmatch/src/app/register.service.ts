import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterUser } from './register/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  register:RegisterUser;
  constructor(private httprequest:HttpClient) { }
  addUser(register:RegisterUser):Observable<any>{
   return  this.httprequest.post("http://localhost:8083/register",register);
    
  }
}
