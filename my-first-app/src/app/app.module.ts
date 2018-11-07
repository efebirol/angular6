import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { MeinModulComponent } from './mein-modul/mein-modul.component';
import { TesttemplatecompontentComponent } from './testtemplatecompontent/testtemplatecompontent.component';
import { MeindatabindingComponent } from './meindatabinding/meindatabinding.component';
import { MeinpropertybindingComponent } from './meinpropertybinding/meinpropertybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    MeinModulComponent,
    TesttemplatecompontentComponent,
    MeindatabindingComponent,
    MeinpropertybindingComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
