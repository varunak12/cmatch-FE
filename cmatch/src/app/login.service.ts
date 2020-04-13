import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
 providedIn: 'root'
})
export class LoginService {
 url :string;
 constructor(private httpClient : HttpClient) {
   this.url = 'http://localhost:8083/login';
 }
 authenticationLogin(loginUser : any){
   return this.httpClient.post(this.url,loginUser,{observe:"response",responseType:'text'});
 }
 setBearerToken(bearerToken : string){
   localStorage.setItem("bearerToken",bearerToken);
 }
 getBearerToken(){
   return localStorage.getItem("bearerToken");
 }
 isAuthenticatedUser(token :  string){
   return this.httpClient.post(`${this.url}/isAuthenticated`,{},{
     headers : new HttpHeaders().set('Authorization',`Bearer ${token}`)
   })
 }
}