import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-meinpassingdatafromevent",
  templateUrl: "./meinpassingdatafromevent.component.html",
  styleUrls: ["./meinpassingdatafromevent.component.css"]
})
export class MeinpassingdatafromeventComponent implements OnInit {
  serverCreationStatus = "noch kein Server erstellt";
  serverName = '';
  constructor() {}
  ngOnInit() {}

  //Fkt. um Variablen von Events an Template weiterzugeben
  onUpdateServerName(event: any) {
    // console.log("Event Objekt:"+event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
