import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },

  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)  
    ],
    exports:[RouterModule]
  })
  export class AppRouterModule { }

