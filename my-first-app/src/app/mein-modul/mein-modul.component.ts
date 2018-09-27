import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mein-modul',
  // templateUrl: './mein-modul.component.html',
  template: `
    <app-server></app-server>
    <app-server></app-server>
    <app-testtemplatecompontent></app-testtemplatecompontent>`,
  styleUrls: ['./mein-modul.component.css']
})
export class MeinModulComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
