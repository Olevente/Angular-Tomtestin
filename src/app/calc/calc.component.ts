/*
* File: calc.component.ts
* Author: Orosz Levente
* Copyright: 2023, Orosz Levente
* Group: Szoft-II-N
* Date: 2023-02-08
* Github: https://github.com/Olevente/
* Licenc: GNU GPL
*/

import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {
  kg = new FormControl("");
  height = new FormControl("");
  calc = new FormControl("");

  bodyindexVisible = false;


  ngOnInit(): void {

  }
  onKeyup(event:any) {
    if(event.key == "enter") {
      this.onenter();
    }
  }

  onenter() {
    this.startCalc();
  }

  onClickButton() {
    this.startCalc();
  }


  startCalc() {
    let kg = Number(this.kg.value);
    let height = Number(this.height.value);
    let bodyindex = this.calcBodyIndex(kg,height);
    this.calc.setValue(String(bodyindex));
    this.bodyindexVisible = true;

  }

  calcBodyIndex(kg:number, height:number) {
    let bodyindex = kg/Math.pow(height,2);
    return bodyindex;
  }

}
