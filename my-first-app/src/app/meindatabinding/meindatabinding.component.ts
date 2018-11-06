import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meindatabinding',
  templateUrl: './meindatabinding.component.html',
  styleUrls: ['./meindatabinding.component.css']
})
export class MeindatabindingComponent {

  meinmoduleProperty: string = "-- mein-modul.component.ts - Property meiner mein-modul Kompomente";
  serverId : number =  654321;
  serverStatus: string = "bin online!";
  
getServerStatus(){
  return this.serverStatus;
}

}
