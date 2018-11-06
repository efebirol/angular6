import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mein-modul',
  // templateUrl: './mein-modul.component.html',

  //kann hier bestimmen, was in diesem Template ausgegeben wird (auch andere Templates)
  template: `
    <app-testtemplatecompontent></app-testtemplatecompontent>
    <app-testtemplatecompontent></app-testtemplatecompontent>
    `,
  styleUrls: ['./mein-modul.component.css']
})
export class MeinModulComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
