import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    otrosPasivosLargoPlazoDos: string;
    totPasivoLargoPlazo: string;
    totPasivoLargoPlazoDos: string;
    otrosPasivos: string;
    otrosPasivosDos: string;
    totalDelPasivo: string;
    totalDelPasivoDos: string;
    patrimonioNeto: string;
    patrimonioNetoDos: string;
    capitalSuscrito: string;
    capitalSuscritoDos: string;
    capitalSuscritoNoPaga: string;
    capitalSuscritoNoPagaDos: string;
    aportesSocios: string;
    aportesSociosDos: string;
    reservaLegal: string;
    reservaLegalDos: string;
    otrasReservas: string;
    otrasReservasDos: string;
    utilidadNoDistribuida: string;
    utilidadNoDistribuidaDos: string;
    perdidaAcumulada: string;
    perdidaAcumuladaDos: string;
    utilidadEjercito: string;
    utilidadEjercitoDos: string;
    totalPatrimonio: string;
    totalPatrimonioDos: string;
    totalPasivoPatrimonio: string;
    totalPasivoPatrimonioDos: string;
    estadoResultadosFecha: string;
    estadoResultadosFechaDos: string;
    ventasTotales: string;
    ventasTotalesDos: string;
    costoVentas: string;
    costoVentasDos: string;
    utilidadBruta: string;
    utilidadBrutaDos: string;
    gastosAdministracion: string;
    gastosAdministracionDos: string;
    utilidadOperacional: string;
    utilidadOperacionalDos: string;
    ingresosNoOperacionales: string;
    ingresosNoOperacionalesDos: string;
    gastosNoOperacio: string;
    gastosNoOperacioDos: string;
    utilidadAntesImpuestos: string;
    utilidadAntesImpuestosDos: string;
    participacionTrabajadores: string;
    participacionTrabajadoresDos: string;
    utilidadTributable: string;
    utilidadTributableDos: string;
    impuestoARenta: string;
    impuestoARentaDos: string;
    utilidadRepartible: string;
    utilidadRepartibleDos: string;
    indiceFinancieroFecha: string;
    indiceFinancieroFechaDos: string;
    razonCorriente: string;
    razonCorrienteDos: string;
    razonCorrienteTres: string;
    pruebaAcida: string;
    pruebaAcidaDos: string;
    pruebaAcidaTres: string;
    razonEfectivo: string;
    razonEfectivoDos: string;
    razonEfectivoTres: string;
    indiceApalanca: string;
    indiceApalancaDos: string;
    indiceApalancaTres: string;
    razonDeudaTotal: string;
    razonDeudaTotalDos: string;
    razonDeudaTotalTres: string;
    indicesActividad: string;
    indicesActividadDos: string;
    indicesActividadTres: string;
    rotacionInventario: string;
    rotacionInventarioDos: string;
    rotacionInventarioTres: string;
    diasVenta: string;
    diasVentaDos: string;
    diasVentaTres: string;
    rotacionCuentas: string;
    rotacionCuentasDos: string;
    rotacionCuentasTres: string;
    diasPromedio: string;
    diasPromedioDos: string;
    diasPromedioTres: string;
    rotacionCuentasPagar: string;
    rotacionCuentasPagarDos: string;
    rotacionCuentasPagarTres: string;
    diasCuentasPagar: string;
    diasCuentasPagarDos: string;
    diasCuentasPagarTres: string;
    rotacionActivosTotales: string;
    rotacionActivosTotalesDos: string;
    rotacionActivosTotalesTres: string;
    indicesRentabilidad: string;
    indicesRentabilidadDos: string;
    indicesRentabilidadTres: string;
    margenUtilidad: string;
    margenUtilidadDos: string;
    margenUtilidadTres: string;
    rendimientoActivos: string;
    rendimientoActivosDos: string;
    rendimientoActivosTres: string;
    rendimientoCapital: string;
    rendimientoCapitalDos: string;
    rendimientoCapitalTres: string;
    cuentaFecha: string;
    cuentaFechaDos: string;
    activoCorriente: string;
    activoCorrienteDos: string;
    activoNoCorriente: string;
    activoNoCorrienteDos: string;
    totalActivos: string;
    totalActivosDos: string;
    pasivoCorriente: string;
    pasivoCorrienteDos: string;
    pasivoNoCorriente: string;
    pasivoNoCorrienteDos: string;
    totalPasivos: string;
    totalPasivosDos: string;
    patrimonio: string;
    patrimonioDos: string;
    ventasCompleto: string;
    ventasCompletoDos: string;
    utilidadPerdida: string;
    utilidadPerdidaDos: string;
    capitalTrabajo: string;
    capitalTrabajoDos: string;
    valor1: string;
    valor2: string;
    valor3: string;
    valor4: string;
    valor5: string;
    valor6: string;
    valor7: string;
    valor8: string;
    valor9: string;
    valor10: string;
    porcentaje1: string;
    porcentaje2: string;
    porcentaje3: string;
    porcentaje4: string;
    porcentaje5: string;
    porcentaje6: string;
    porcentaje7: string;
    porcentaje8: string;
    porcentaje9: string;
    porcentaje10: string;
    fortaleza: string;
    fortaleza1: string;
    fortaleza2: string;
    fortaleza3: string;
    fortaleza4: string;
    fortaleza5: string;
    fortaleza6: string;
    fortaleza7: string;
    fortaleza8: string;
    fortaleza9: string;
    fortaleza10: string;
    debilidad: string;
    debilidad1: string;
    debilidad2: string;
    debilidad3: string;
    debilidad4: string;
    debilidad5: string;
    debilidad6: string;
    debilidad7: string;
    debilidad8: string;
    debilidad9: string;
    debilidad10: string;
    observacionesCompleto: string;



    emailPattern = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    textPattern = new RegExp(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ&-.\s ]+$/);
    numberPattern = new RegExp(/^[0-9 ]+$/);
    paginaWebPattern = new RegExp(/^((https?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/);
    dineroPattern = new RegExp(/^\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$/);


    constructor(public fb: FormBuilder, private proveedoresService: FormProveedoresServiceService) {

        this.reporteCompleto = this.fb.group({
            balanceGeneralFecha: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            balanceGeneralFechaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cajaBancosCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cajaBancosCompletoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            inversionesCorrientes: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            inversionesCorrientesDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cuentasRelacionadas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cuentasRelacionadasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cuentasNoRelacionadas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cuentasNoRelacionadasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrasCuentasRelacionadas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrasCuentasRelacionadasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrasCuentasNoRelacionadas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrasCuentasNoRelacionadasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            provisionCuentas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            provisionCuentasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            creditoTributario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            creditoTributarioDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            inventariosCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            inventariosCompletoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            activosPagados: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            activosPagadosDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrosActivosCorrientes: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrosActivosCorrientesDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalActivoCorriente: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalActivoCorrienteDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalActivoFijo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalActivoFijoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalActivoDiferido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalActivoDiferidoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            inversionesParticipaciones: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            inversionesParticipacionesDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrasInversionesLargoPlazo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrasInversionesLargoPlazoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cuentasPorCobrarRelacionadas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cuentasPorCobrarRelacionadasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cuentasPorCobrarNoRelacionadas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cuentasPorCobrarNoRelacionadasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrasCuentasPorCobrarRelacionadas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrasCuentasPorCobrarRelacionadasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrasCuentasPorCobrarNoRelacionadas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrasCuentasPorCobrarNoRelacionadasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            provisionCuentasIncobrables: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            provisionCuentasIncobrablesDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrosActivosLargoPlazo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrosActivosLargoPlazoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalActivosLargoPlazo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalActivosLargoPlazoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalDelActivo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalDelActivoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            pasivoCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            pasivoCompletoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cuentasProveedoresRelacionado: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cuentasProveedoresRelacionadoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cuentasProveedoresNoRelacionado: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cuentasProveedoresNoRelacionadoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            obligacionesFinancieras: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            obligacionesFinancierasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            prestamosAccionistas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            prestamosAccionistasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrasCuentasPagarRelacionadas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrasCuentasPagarRelacionadasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrasCuentasPagarNoRelacionadas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrasCuentasPagarNoRelacionadasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            impuestoRentaEjercito: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            impuestoRentaEjercitoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            participacionEjercito: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            participacionEjercitoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrosPasivosCorrientes: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrosPasivosCorrientesDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalPasivoCorriente: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalPasivoCorrienteDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cuentasPorPagar: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cuentasPorPagarDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cuentasPorPagarNoRela: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cuentasPorPagarNoRelaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            obligacionesInstituFinan: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            obligacionesInstituFinanDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            prestamosLargoPlazo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            prestamosLargoPlazoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrasCuentasLargoPlazo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrasCuentasLargoPlazoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrasCuentasPorPagar: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrasCuentasPorPagarDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrosPasivosLargoPlazo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrosPasivosLargoPlazoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totPasivoLargoPlazo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totPasivoLargoPlazoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrosPasivos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrosPasivosDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalDelPasivo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalDelPasivoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            patrimonioNeto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            patrimonioNetoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            capitalSuscrito: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            capitalSuscritoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            capitalSuscritoNoPaga: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            capitalSuscritoNoPagaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            aportesSocios: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            aportesSociosDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            reservaLegal: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            reservaLegalDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrasReservas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            otrasReservasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            utilidadNoDistribuida: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            utilidadNoDistribuidaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            perdidaAcumulada: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            perdidaAcumuladaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            utilidadEjercito: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            utilidadEjercitoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalPatrimonio: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalPatrimonioDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalPasivoPatrimonio: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalPasivoPatrimonioDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            estadoResultadosFecha: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            estadoResultadosFechaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            ventasTotales: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            ventasTotalesDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            costoVentas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            costoVentasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            utilidadBruta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            utilidadBrutaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            gastosAdministracion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            gastosAdministracionDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            utilidadOperacional: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            utilidadOperacionalDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            ingresosNoOperacionales: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            ingresosNoOperacionalesDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            gastosNoOperacio: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            gastosNoOperacioDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            utilidadAntesImpuestos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            utilidadAntesImpuestosDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            participacionTrabajadores: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            participacionTrabajadoresDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            utilidadTributable: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            utilidadTributableDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            impuestoARenta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            impuestoARentaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            utilidadRepartible: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            utilidadRepartibleDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            indiceFinancieroFecha: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            indiceFinancieroFechaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            razonCorriente: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            razonCorrienteDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            razonCorrienteTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            pruebaAcida: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            pruebaAcidaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            pruebaAcidaTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            razonEfectivo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            razonEfectivoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            razonEfectivoTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            indiceApalanca: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            indiceApalancaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            indiceApalancaTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            razonDeudaTotal: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            razonDeudaTotalDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            razonDeudaTotalTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            indicesActividad: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            indicesActividadDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            indicesActividadTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            rotacionInventario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            rotacionInventarioDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            rotacionInventarioTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            diasVenta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            diasVentaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            diasVentaTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            rotacionCuentas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            rotacionCuentasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            rotacionCuentasTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            diasPromedio: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            diasPromedioDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            diasPromedioTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            rotacionCuentasPagar: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            rotacionCuentasPagarDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            rotacionCuentasPagarTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            diasCuentasPagar: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            diasCuentasPagarDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            diasCuentasPagarTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            rotacionActivosTotales: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            rotacionActivosTotalesDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            rotacionActivosTotalesTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            indicesRentabilidad: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            indicesRentabilidadDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            indicesRentabilidadTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            margenUtilidad: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            margenUtilidadDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            margenUtilidadTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            rendimientoActivos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            rendimientoActivosDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            rendimientoActivosTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            rendimientoCapital: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            rendimientoCapitalDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            rendimientoCapitalTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cuentaFecha: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cuentaFechaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            activoCorriente: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            activoCorrienteDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            activoNoCorriente: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            activoNoCorrienteDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalActivos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalActivosDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            pasivoCorriente: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            pasivoCorrienteDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            pasivoNoCorriente: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            pasivoNoCorrienteDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalPasivos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalPasivosDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            patrimonio: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            patrimonioDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            ventasCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            ventasCompletoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            utilidadPerdida: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            utilidadPerdidaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            capitalTrabajo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            capitalTrabajoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            valor1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            valor2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            valor3: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            valor4: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            valor5: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            valor6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            valor7: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            valor8: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            valor9: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            valor10: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            porcentaje1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            porcentaje2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            porcentaje3: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            porcentaje4: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            porcentaje5: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            porcentaje6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            porcentaje7: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            porcentaje8: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            porcentaje9: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            porcentaje10: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            fortaleza: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            fortaleza1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            fortaleza2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            fortaleza3: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            fortaleza4: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            fortaleza5: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            fortaleza6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            fortaleza7: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            fortaleza8: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            fortaleza9: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            fortaleza10: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            debilidad: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            debilidad1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            debilidad2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            debilidad3: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            debilidad4: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            debilidad5: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            debilidad6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            debilidad7: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            debilidad8: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            debilidad9: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            debilidad10: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            observacionesCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
        });
    }

    ngOnInit() {
    }

    onResetForm() {
        this.reporteCompleto.reset();

    }
    //funciones anandidas para mongoDB
    newProveedor(): void {
        this.submitted = false;
        this.formularioCompleto = new formCompleto();
    }

    addReporteExpress() {
        this.submitted = true;
        
      }
  
}
