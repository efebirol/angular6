import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { MeinModulComponent } from './mein-modul/mein-modul.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    MeinModulComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
