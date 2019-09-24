import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators, FormArray } from '@angular/forms';
import { FormProveedoresServiceService } from '../services/form-proveedores-service.service';
import { formCompleto } from '../models/formularioCompleto';

@Component({
  selector: 'app-informe-completo',
  templateUrl: './informe-completo.component.html',
  styleUrls: ['./informe-completo.component.css']
})
export class InformeCompletoComponent implements OnInit {
  formularioCompleto = new formCompleto();
  submitted = false;
  //empieza formulario
  reporteCompleto: FormGroup;

  emailPattern = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  textPattern= new RegExp(/^[a-zA-Z ]+$/);
  numberPattern= new RegExp(/^[0-9 ]+$/);

  constructor(public fb: FormBuilder, private proveedoresService:FormProveedoresServiceService) { 
    
  }

  ngOnInit() {
  }

 

}
