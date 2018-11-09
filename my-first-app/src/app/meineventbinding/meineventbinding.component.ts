import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meineventbinding',
  templateUrl: './meineventbinding.component.html',
  styleUrls: ['./meineventbinding.component.css']
})
export class MeineventbindingComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "-- .ts - Defaultnachricht";


  constructor() {
    //call anonymous function (ES6) after 2 secs
    setTimeout(() => {
      this.allowNewServer = true;
      console.log("-- meinpropertybinding.component. - Nachricht vom Server - Button switched in 2 Sekunden auf aktiv");
    }, 2000);
  }

  //Funktion für das Eventbinding (Databinding) - hier, klick auf Button
  onCreateServer(){
    this.serverCreationStatus = "Button wurde geklickt (Eventbinding)";   //"p"-Tag sollte sich ändern
  }

  ngOnInit() {}
}
