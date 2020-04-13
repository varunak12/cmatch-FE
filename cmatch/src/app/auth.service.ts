import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
 providedIn: 'root'
})
export class AuthService {
 url  = 'http://localhost:8083/register';
 constructor(private httpClient : HttpClient) {
 }
 authenticationRegister(registerUser : any) {
   return this.httpClient.post(this.url,registerUser,{observe:"response",responseType:'text'});
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