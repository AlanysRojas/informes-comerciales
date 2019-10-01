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

  fechaCompleto: string;
  solicitanteCompleto: string;
  balanceGeneralFecha: string;
  balanceGeneralFechaDos: string;
  cajaBancosCompleto: string;
  cajaBancosCompletoDos: string;
  inversionesCorrientes: string;
  inversionesCorrientesDos: string;
  cuentasRelacionadas: string;
  cuentasRelacionadasDos: string;
  cuentasNoRelacionadas: string;
  cuentasNoRelacionadasDos: string;
  otrasCuentasRelacionadas: string;
  otrasCuentasRelacionadasDos: string;
  otrasCuentasNoRelacionadas: string;
  otrasCuentasNoRelacionadasDos: string;
  provisionCuentas: string;
  provisionCuentasDos: string;
  creditoTributario: string;
  creditoTributarioDos: string;
  inventariosCompleto: string;
  inventariosCompletoDos: string;
  activosPagados: string;
  activosPagadosDos: string;
  otrosActivosCorrientes: string;
  otrosActivosCorrientesDos: string;
  totalActivoCorriente: string;
  totalActivoCorrienteDos: string;
  totalActivoFijo: string;
  totalActivoFijoDos: string;
  totalActivoDiferido: string;
  totalActivoDiferidoDos: string;
  inversionesParticipaciones: string;
  inversionesParticipacionesDos: string;
  otrasInversionesLargoPlazo: string;
  otrasInversionesLargoPlazoDos: string;
  cuentasPorCobrarRelacionadas: string;
  cuentasPorCobrarRelacionadasDos: string;
  cuentasPorCobrarNoRelacionadas: string;
  cuentasPorCobrarNoRelacionadasDos: string;
  otrasCuentasPorCobrarRelacionadas: string;
  otrasCuentasPorCobrarRelacionadasDos: string;
  otrasCuentasPorCobrarNoRelacionadas: string;
  otrasCuentasPorCobrarNoRelacionadasDos: string;
  provisionCuentasIncobrables: string;
  provisionCuentasIncobrablesDos: string;
  otrosActivosLargoPlazo: string;
  otrosActivosLargoPlazoDos: string;
  totalActivosLargoPlazo: string;
  totalActivosLargoPlazoDos: string;
  totalDelActivo: string;
  totalDelActivoDos: string;
  pasivoCompleto: string;
  pasivoCompletoDos: string;
  cuentasProveedoresRelacionado: string;
  cuentasProveedoresRelacionadoDos: string;
  cuentasProveedoresNoRelacionado: string;
  cuentasProveedoresNoRelacionadoDos: string;
  obligacionesFinancieras: string;
  obligacionesFinancierasDos: string;
  prestamosAccionistas: string;
  prestamosAccionistasDos: string;
  otrasCuentasPagarRelacionadas: string;
  otrasCuentasPagarRelacionadasDos: string;
  otrasCuentasPagarNoRelacionadas: string;
  otrasCuentasPagarNoRelacionadasDos: string;
  impuestoRentaEjercito: string;
  impuestoRentaEjercitoDos: string;
  participacionEjercito: string;
  participacionEjercitoDos: string;
  otrosPasivosCorrientes: string;
  otrosPasivosCorrientesDos: string;
  totalPasivoCorriente: string;
  totalPasivoCorrienteDos: string;
  cuentasPorPagar: string;
  cuentasPorPagarDos: string;
  cuentasPorPagarNoRela: string;
  cuentasPorPagarNoRelaDos: string;
  obligacionesInstituFinan: string;
  obligacionesInstituFinanDos: string;
  prestamosLargoPlazo: string;
  prestamosLargoPlazoDos: string;
  otrasCuentasLargoPlazo: string; 
  otrasCuentasLargoPlazoDos: string;
  otrasCuentasPorPagar: string;
  otrasCuentasPorPagarDos: string;
  otrosPasivosLargoPlazo: string;






  emailPattern = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  textPattern= new RegExp(/^[a-zA-Z ]+$/);
  numberPattern= new RegExp(/^[0-9 ]+$/);

  constructor(public fb: FormBuilder, private proveedoresService:FormProveedoresServiceService) { 
    
  }

  ngOnInit() {
  }

 

}
