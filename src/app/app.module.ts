import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRouterModule } from './router-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material-module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent
    ],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    CustomMaterialModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
