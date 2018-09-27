import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { MeinModulComponent } from './mein-modul/mein-modul.component';
import { TesttemplatecompontentComponent } from './testtemplatecompontent/testtemplatecompontent.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    MeinModulComponent,
    TesttemplatecompontentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
