import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RequisitosProveedoresComponent} from '../app/requisitos-proveedores/requisitos-proveedores.component';
import {InformeCompletoComponent} from '../app/informe-completo/informe-completo.component';

const routes: Routes = [
  {
    path: 'express',
    component: RequisitosProveedoresComponent
  },
  {
    path: 'completo',
    component: InformeCompletoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
