import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequisitosProveedoresComponent } from './requisitos-proveedores/requisitos-proveedores.component';
import { InformeCompletoComponent } from './informe-completo/informe-completo.component';

@NgModule({
  declarations: [
    AppComponent,
    RequisitosProveedoresComponent,
    InformeCompletoComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
