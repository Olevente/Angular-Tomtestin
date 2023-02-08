/*
* File: app-routing.module.ts
* Author: Orosz Levente
* Copyright: 2023, Orosz Levente
* Group: Szoft-II-N
* Date: 2023-02-08
* Github: https://github.com/Olevente/
* Licenc: GNU GPL
*/


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CalcComponent} from './calc/calc.component';
import { GithubComponent } from './github/github.component';

const routes: Routes = [
  {path:"about", component:AboutComponent},
  {path:"calc", component:CalcComponent},
  {path:"github", component:GithubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
