/*
* File: about.component.html
* Author: Orosz Levente
* Copyright: 2023, Orosz Levente
* Group: Szoft-II-N
* Date: 2023-02-08
* Github: https://github.com/Olevente/
* Licenc: GNU GPL
*/



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  name!: String;
  date!: String;
  class!: String;


  ngOnInit() {
    this.name = "Orosz Levente";
    this.date = "2023-02-08";
    this.class = "Szoft-II-N";
  }

}
