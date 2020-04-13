import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { PreviousmatchesComponent } from './previous-matches/previous-matches.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  
  {path:'home',component:HomePageComponent},

  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'upcomingMatches',component:UpcomingComponent},
  {path:'previousMatches',component:PreviousmatchesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponenets=[LoginComponent,RegisterComponent,HomePageComponent];
