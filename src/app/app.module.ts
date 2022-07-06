import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanynameComponent } from './companyname/companyname.component';
import { ManagernameComponent } from './managername/managername.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanynameComponent,
    ManagernameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
