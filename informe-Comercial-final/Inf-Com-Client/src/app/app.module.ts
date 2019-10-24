import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformeCompletoComponent } from "./informe-completo/InformeCompletoComponent";
import { ChartsModule } from 'ng2-charts';
import { InformeExpressComponent } from "../app/informe-express/informe-express.component"


import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [
    AppComponent,
    InformeCompletoComponent,
    InformeExpressComponent
  ],
  imports: [
    ReactiveFormsModule,
    TextMaskModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
