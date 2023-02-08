/*
* File: app.module.ts
* Author: Orosz Levente
* Copyright: 2023, Orosz Levente
* Group: Szoft-II-N
* Date: 2023-02-08
* Github: https://github.com/Olevente/
* Licenc: GNU GPL
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CalcComponent } from './calc/calc.component';
import { GithubComponent } from './github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CalcComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
