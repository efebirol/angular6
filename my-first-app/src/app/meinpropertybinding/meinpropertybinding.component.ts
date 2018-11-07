import { Component, OnInit } from "@angular/core";
import { setTime } from "ngx-bootstrap/chronos/utils/date-setters";

@Component({
  selector: "app-meinpropertybinding",
  templateUrl: "./meinpropertybinding.component.html",
  styleUrls: ["./meinpropertybinding.component.css"]
})
export class MeinpropertybindingComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    //call anonymous function (ES6) after 2 secs
    setTimeout(() => {
      this.allowNewServer = true;
      console.log("-- meinpropertybinding.component. - Nachricht vom Server - Button switched in 2 Sekunden auf aktiv");
    }, 2000);
  }

  ngOnInit() {}
}
