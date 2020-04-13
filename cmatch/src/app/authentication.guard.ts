import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
 providedIn: 'root'
})
export class AuthenticationGuard implements  CanActivate {
 constructor(private authService : AuthService,
  
   private router:Router){}
 canActivate(
   next: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.authService.isAuthenticatedUser(
        this.authService.getBearerToken())
        .subscribe(result=>{
         console.log("res",result);
        if(!(result['isAuthenticated'])){
       this.router.navigate(['register']);
     }
     })
     return true;
 }
}