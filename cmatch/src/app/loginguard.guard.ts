import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
 providedIn: 'root'
})
export class LoginGuard implements CanActivate {
 constructor(private loginService : LoginService,
   private router:Router){}
 canActivate(
   next: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.loginService.isAuthenticatedUser(
        this.loginService.getBearerToken())
        .subscribe(result=>{
         console.log("res",result);
        if(!(result['isAuthenticated'])){
       this.router.navigate(['login']);
     }
     })
     return true;
 }
}