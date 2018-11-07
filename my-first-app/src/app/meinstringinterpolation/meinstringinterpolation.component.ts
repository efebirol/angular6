import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meinstringinterpolation',
  templateUrl: './meinstringinterpolation.component.html',
  styleUrls: ['./meinstringinterpolation.component.css']
})
export class MeinstringinterpolationComponent implements OnInit {
  meinString: string = "--meinstringinterpolation.component.ts - meinString Variable"
  
  constructor() { }

  ngOnInit() {
  }

}
