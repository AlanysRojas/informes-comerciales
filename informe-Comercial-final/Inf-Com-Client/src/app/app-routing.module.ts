import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformeCompletoComponent } from "../app/informe-completo/InformeCompletoComponent";
import { InformeExpressComponent } from "../app/informe-express/informe-express.component"

const routes: Routes = [
  {
    path: 'express',
    component: InformeExpressComponent
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
