import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompletoService } from '../services/completo.service';
import { formCompleto } from '../models/formularioCompleto';
import Swal from 'sweetalert2';

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


    fechaElaboracionCompleta: string;
    solicitanteCompleto: string;
    razonSocialCompleto: string;
    nombreComercialCompleto: string;
    rucCompleto: string;
    formaLegalCompleto: string;
    estadoCompleto: string;
    capitalSubscritoCompleto: string;
    inicioActividadesCompleto: string;
    actividadPrincipalCompleto: string;
    objetoSocialCompleto: string;
    provinciaCompleto: string;
    ciudadCompleto: string;
    direccionCompleto: string;
    telefonoCompleto: string;
    paginaWebCompleto: string;
    representanteLegalCompleto: string;
    cedulaCompleto: string;
    personaContactoCompleto: string;
    cargoCompleto: string;
    correoCompleto: string;
    checksEmpresasCompleto: string;
    empresasRelacionadasCompleto: string;
    grupoEconomicoCompleto: string;
    codigoActividadCompleto: string;
    anioPagoImpuestoCompleto: string;
    pagoRentaUnoCompleto: string;
    anioPagoImpuestoDosCompleto: string;
    pagoRentaDosCompleto: string;
    anioSalidaDivisasCompleto: string;
    anioSalidaDivisasDosCompleto:string;
    salidaDivisasCompletoUno: string;
    salidaDivisasCompletoDos: string;
    checksCalificaciones: string;
    requeridoClienteCompleto: string;
    requeridoServiratingCompleto: string;
    checksInfraestructura: string;
    checksSucursalesCompleto: string;
    direccionSucursalCompleto: string;
    numeroEmpleadosCompleto: string;
    checksMaquinaria: string;
    directivoUnoCompleto: string;
    cargoDirectivoUnoCompleto: string;
    directivoDosCompleto: string;
    cargoDirectivoDosCompleto: string;
    numeroAccionistaCompleto: string;
    identificacionAccionistaCompleto: string;
    nombreAccionistaCompleto: string;
    nacionalidadAccionistaCompleto: string;
    tipoInversionAccionistaCompleto
    capitalAccionistaCompleto: string;
    restriccionAccionistaCompleto: string;
    numeroDosAccionistaCompleto: string;
    identificacionDosAccionistaCompleto: string;
    nombreDosAccionistaCompleto: string;
    nacionalidadDosAccionistaCompleto: string;
    tipoInversionDosAccionistaCompleto: string;
    capitalDosAccionistaCompleto: string;
    restriccionDosAccionistaCompleto: string;
    nombreRefCompleto: string;
    nombreRefDosCompleto: string;
    direccionRefCompleto: string;
    direccionRefDosCompleto: string;
    telefonoRefCompleto: string;
    telefonoRefDosCompleto: string;
    contactoRefCompleto: string;
    contactoRefDosCompleto: string;
    lineaCreditoRefCompleto: string;
    lineaCreditoRefDosCompleto: string;
    pagosRefCompleto: string;
    pagosRefDosCompleto: string;
    productoRefCompleto: string;
    productoRefDosCompleto: string;
    clienteDesdeRefCompleto: string;
    clienteDesdeRefDosCompleto: string;
    compraMensualRefCompleta: string;
    compraMensualDosRefCompleta: string;
    checksPuntualidadPagos: string;
    checksPuntualidadPagosDos: string;
    checksObligacionesLegales: string;
    checksSuperintendencia: string;
    procesosJudicialesCompleto: string;
    accionesDelitosCompleto: string;
    informacionRelevanteCompleto: string;
    informacionBancariaCompleto: string;
    institucionRefCompleta: string;
    fechaInstCompleto: string;
    mensajeRefCompleta: string;
    fechaCorteCompleta: string;
    institucionCompleta: string;
    tipoRiesgoCompleta: string;
    tipoCreditoCompleta: string;
    vincCompleta: string;
    totalVencerCompleta: string;
    noDevInteresesCompleta: string;
    totalVencidoCompleta: string;
    demJudCompleta: string;
    cartCastCompleta: string;
    saldoDeudaCompleta: string;
    acConcCompleta: string;
    fechaCorteCompleta1: string;
    institucionCompleta1: string;
    tipoRiesgoCompleta1: string;
    tipoCreditoCompleta1: string;
    vincCompleta1: string;
    totalVencerCompleta1: string;
    noDevInteresesCompleta1: string;
    totalVencidoCompleta1: string;
    demJudCompleta1: string;
    cartCastCompleta1: string;
    saldoDeudaCompleta1: string;
    acConcCompleta1: string;
    fechaCorteCompleta2: string;
    institucionCompleta2: string;
    tipoRiesgoCompleta2: string;
    tipoCreditoCompleta2: string;
    vincCompleta2: string;
    totalVencerCompleta2: string;
    noDevInteresesCompleta2: string;
    totalVencidoCompleta2: string;
    demJudCompleta2: string;
    cartCastCompleta2: string;
    saldoDeudaCompleta2: string;
    acConcCompleta2: string;
    fechaCorteCompleta3: string;
    institucionCompleta3: string;
    tipoRiesgoCompleta3: string;
    tipoCreditoCompleta3: string;
    vincCompleta3: string;
    totalVencerCompleta3: string;
    noDevInteresesCompleta3: string;
    totalVencidoCompleta3: string;
    demJudCompleta3: string;
    cartCastCompleta3: string;
    saldoDeudaCompleta3: string;
    acConcCompleta3: string;
    fechaCorteCompleta4: string;
    institucionCompleta4: string;
    tipoRiesgoCompleta4: string;
    tipoCreditoCompleta4: string;
    vincCompleta4: string;
    totalVencerCompleta4: string;
    noDevInteresesCompleta4: string;
    totalVencidoCompleta4: string;
    demJudCompleta4: string;
    cartCastCompleta4: string;
    saldoDeudaCompleta4: string;
    acConcCompleta4: string;
    fechaCorteCompleta5: string;
    institucionCompleta5: string;
    tipoRiesgoCompleta5: string;
    tipoCreditoCompleta5: string;
    vincCompleta5: string;
    totalVencerCompleta5: string;
    noDevInteresesCompleta5: string;
    totalVencidoCompleta5: string;
    demJudCompleta5: string;
    cartCastCompleta5: string;
    saldoDeudaCompleta5: string;
    acConcCompleta5: string;
    
    institucionCompleta6: string;
    tipoRiesgoCompleta6: string;
    tipoCreditoCompleta6: string;
    vincCompleta6: string;
    totalVencerCompleta6: string;
    noDevInteresesCompleta6: string;
    totalVencidoCompleta6: string;
    demJudCompleta6: string;
    cartCastCompleta6: string;
    saldoDeudaCompleta6: string;
    acConcCompleta6: string;
    acreedorCompleto: string;
    porVencerCompleto: string;
    noDevengaIntCompleto: string;
    vencidoCompleto: string;
    saldDeudaCompleto: string;
    demandaJudicialCompleto: string;
    carteraCastigadaCompleto: string;
    porVencerTotal: string;
    noDevInteresesTotal: string;
    vencidoTotal: string;
    saldoDeudaTotal: string;
    demandaJudicialTotal: string;
    carteraCastigadaTotal: string;
    historialCrediticioCompleto: string;
    mayPlazoVencidoCompleto: string;
    fechaMayPlazoVencido: string;
    mayValorVencidoCompleto: string;
    fechaMayValorVencido: string;
    endeudamientoPromCompleto: string;
    fechaEndeudamiento: string;
    mayPlazoVencidoCompleto1: string;
    fechaMayPlazoVencido1: string;
    mayValorVencidoCompleto1: string;
    fechaMayValorVencido1: string;
    endeudamientoPromCompleto1: string;
    fechaEndeudamiento1: string;
    detallOperacionesVencidasCompleto: string;


//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa


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


    constructor(public fb: FormBuilder, private completoService: CompletoService) {

        this.reporteCompleto = this.fb.group({

            fechaElaboracionCompleta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(this.textPattern)]],
            solicitanteCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(this.textPattern)]],
            razonSocialCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(this.textPattern)]],
            nombreComercialCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(this.textPattern)]],
            rucCompleto:['', [Validators.required, Validators.minLength(13), Validators.maxLength(13), Validators.pattern(this.numberPattern)]],
            formaLegalCompleto:  ['', [Validators.required]],
            estadoCompleto: ['', [Validators.required]],
            capitalSubscritoCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            inicioActividadesCompleto: ['', [Validators.required]],
            actividadPrincipalCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(this.textPattern)]],
            objetoSocialCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(this.textPattern)]],
            provinciaCompleto: ['', [Validators.required]],
            ciudadCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
            direccionCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
            telefonoCompleto:['', [Validators.required, Validators.minLength(7), Validators.maxLength(10)]],
            paginaWebCompleto: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(30), Validators.pattern(this.paginaWebPattern)]],
            representanteLegalCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(this.textPattern)]],
            cedulaCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(this.textPattern)]],
            personaContactoCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(this.textPattern)]],
            cargoCompleto: ['', [Validators.required]],
            correoCompleto: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(30), Validators.pattern(this.emailPattern)]],
            checksEmpresasCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(this.textPattern)]],
            empresasRelacionadasCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(this.textPattern)]],
            grupoEconomicoCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(this.textPattern)]],
            codigoActividadCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(this.textPattern)]],
            anioPagoImpuestoCompleto: ['', [Validators.required]],
            pagoRentaUnoCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            anioPagoImpuestoDosCompleto: ['', [Validators.required]],
            pagoRentaDosCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            anioSalidaDivisasCompleto: ['', [Validators.required]],
            salidaDivisasCompletoUno: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            salidaDivisasCompletoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            anioSalidaDivisasDosCompleto: ['', [Validators.required]],
            checksCalificaciones: ['', [Validators.required]],
            requeridoClienteCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            requeridoServiratingCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            checksInfraestructura: ['', [Validators.required]],
            checksSucursalesCompleto: ['', [Validators.required]],
            direccionSucursalCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(this.textPattern)]],
            numeroEmpleadosCompleto: ['', [Validators.required]],
            checksMaquinaria: ['', [Validators.required]],
            directivoUnoCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cargoDirectivoUnoCompleto: ['', [Validators.required]],
            directivoDosCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cargoDirectivoDosCompleto: ['', [Validators.required]],
            numeroAccionistaCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(this.textPattern)]],
            identificacionAccionistaCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            nombreAccionistaCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            nacionalidadAccionistaCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            tipoInversionAccionistaCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            capitalAccionistaCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            restriccionAccionistaCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            numeroDosAccionistaCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            identificacionDosAccionistaCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            nombreDosAccionistaCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            nacionalidadDosAccionistaCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            tipoInversionDosAccionistaCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            capitalDosAccionistaCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            restriccionDosAccionistaCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            nombreRefCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            nombreRefDosCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            direccionRefCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            direccionRefDosCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            telefonoRefCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            telefonoRefDosCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            contactoRefCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            contactoRefDosCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            lineaCreditoRefCompleto: ['', [Validators.required]],
            lineaCreditoRefDosCompleto: ['', [Validators.required]],
            pagosRefCompleto: ['', [Validators.required]],
            pagosRefDosCompleto: ['', [Validators.required]],
            productoRefCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            productoRefDosCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            clienteDesdeRefCompleto: ['', [Validators.required]],
            clienteDesdeRefDosCompleto: ['', [Validators.required]],
            compraMensualRefCompleta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            compraMensualDosRefCompleta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            checksPuntualidadPagos: ['', [Validators.required]],
            checksPuntualidadPagosDos: ['', [Validators.required]],
            checksObligacionesLegales: ['', [Validators.required]],
            checksSuperintendencia: ['', [Validators.required]],
            procesosJudicialesCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            accionesDelitosCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            informacionRelevanteCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            informacionBancariaCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            institucionRefCompleta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            fechaInstCompleto: ['', [Validators.required]],
            mensajeRefCompleta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            fechaCorteCompleta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            institucionCompleta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            tipoRiesgoCompleta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            tipoCreditoCompleta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            vincCompleta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalVencerCompleta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            noDevInteresesCompleta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalVencidoCompleta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            demJudCompleta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cartCastCompleta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            saldoDeudaCompleta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            acConcCompleta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            fechaCorteCompleta1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            institucionCompleta1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            tipoRiesgoCompleta1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            tipoCreditoCompleta1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            vincCompleta1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalVencerCompleta1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            noDevInteresesCompleta1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalVencidoCompleta1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            demJudCompleta1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cartCastCompleta1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            saldoDeudaCompleta1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            acConcCompleta1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            fechaCorteCompleta2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            institucionCompleta2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            tipoRiesgoCompleta2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            tipoCreditoCompleta2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            vincCompleta2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalVencerCompleta2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            noDevInteresesCompleta2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalVencidoCompleta2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            demJudCompleta2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cartCastCompleta2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            saldoDeudaCompleta2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            acConcCompleta2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            fechaCorteCompleta3: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            institucionCompleta3: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            tipoRiesgoCompleta3: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            tipoCreditoCompleta3: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            vincCompleta3: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalVencerCompleta3: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            noDevInteresesCompleta3: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalVencidoCompleta3: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            demJudCompleta3: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cartCastCompleta3: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            saldoDeudaCompleta3: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            acConcCompleta3: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            fechaCorteCompleta4: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            institucionCompleta4: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            tipoRiesgoCompleta4: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            tipoCreditoCompleta4: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            vincCompleta4: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalVencerCompleta4: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            noDevInteresesCompleta4: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalVencidoCompleta4: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            demJudCompleta4: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cartCastCompleta4: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            saldoDeudaCompleta4: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            acConcCompleta4: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            fechaCorteCompleta5: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            institucionCompleta5: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            tipoRiesgoCompleta5: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            tipoCreditoCompleta5: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            vincCompleta5: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalVencerCompleta5: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            noDevInteresesCompleta5: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalVencidoCompleta5: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            demJudCompleta5: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cartCastCompleta5: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            saldoDeudaCompleta5: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            acConcCompleta5: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
           // fechaCorteCompleta6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            institucionCompleta6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            //tipoRiesgoCompleta6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            //tipoCreditoCompleta6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            //vincCompleta6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalVencerCompleta6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            noDevInteresesCompleta6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            totalVencidoCompleta6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            demJudCompleta6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            cartCastCompleta6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            saldoDeudaCompleta6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            //acConcCompleta6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            acreedorCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            porVencerCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            noDevengaIntCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            vencidoCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            saldDeudaCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            demandaJudicialCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            carteraCastigadaCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            porVencerTotal: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            noDevInteresesTotal: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            vencidoTotal: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            saldoDeudaTotal: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            demandaJudicialTotal: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            carteraCastigadaTotal: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            historialCrediticioCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            mayPlazoVencidoCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            fechaMayPlazoVencido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            mayValorVencidoCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            fechaMayValorVencido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            endeudamientoPromCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            fechaEndeudamiento: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            mayPlazoVencidoCompleto1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            fechaMayPlazoVencido1: ['', [Validators.required]],
            mayValorVencidoCompleto1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            fechaMayValorVencido1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            endeudamientoPromCompleto1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            fechaEndeudamiento1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            detallOperacionesVencidasCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],




            //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa



            balanceGeneralFecha: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            balanceGeneralFechaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            cajaBancosCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            cajaBancosCompletoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            inversionesCorrientes: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            inversionesCorrientesDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            cuentasRelacionadas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            cuentasRelacionadasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            cuentasNoRelacionadas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            cuentasNoRelacionadasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrasCuentasRelacionadas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrasCuentasRelacionadasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrasCuentasNoRelacionadas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrasCuentasNoRelacionadasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            provisionCuentas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            provisionCuentasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            creditoTributario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            creditoTributarioDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            inventariosCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            inventariosCompletoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            activosPagados: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            activosPagadosDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrosActivosCorrientes: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrosActivosCorrientesDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            totalActivoCorriente: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            totalActivoCorrienteDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            totalActivoFijo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            totalActivoFijoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            totalActivoDiferido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            totalActivoDiferidoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            inversionesParticipaciones: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            inversionesParticipacionesDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrasInversionesLargoPlazo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrasInversionesLargoPlazoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            cuentasPorCobrarRelacionadas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            cuentasPorCobrarRelacionadasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            cuentasPorCobrarNoRelacionadas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            cuentasPorCobrarNoRelacionadasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrasCuentasPorCobrarRelacionadas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrasCuentasPorCobrarRelacionadasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrasCuentasPorCobrarNoRelacionadas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrasCuentasPorCobrarNoRelacionadasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            provisionCuentasIncobrables: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            provisionCuentasIncobrablesDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrosActivosLargoPlazo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrosActivosLargoPlazoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            totalActivosLargoPlazo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            totalActivosLargoPlazoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            totalDelActivo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            totalDelActivoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            pasivoCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            pasivoCompletoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            cuentasProveedoresRelacionado: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            cuentasProveedoresRelacionadoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            cuentasProveedoresNoRelacionado: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            cuentasProveedoresNoRelacionadoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            obligacionesFinancieras: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            obligacionesFinancierasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            prestamosAccionistas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            prestamosAccionistasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrasCuentasPagarRelacionadas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrasCuentasPagarRelacionadasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrasCuentasPagarNoRelacionadas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrasCuentasPagarNoRelacionadasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            impuestoRentaEjercito: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            impuestoRentaEjercitoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            participacionEjercito: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            participacionEjercitoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrosPasivosCorrientes: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrosPasivosCorrientesDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            totalPasivoCorriente: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            totalPasivoCorrienteDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            cuentasPorPagar: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            cuentasPorPagarDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            cuentasPorPagarNoRela: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            cuentasPorPagarNoRelaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            obligacionesInstituFinan: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            obligacionesInstituFinanDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            prestamosLargoPlazo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            prestamosLargoPlazoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrasCuentasLargoPlazo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrasCuentasLargoPlazoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrasCuentasPorPagar: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrasCuentasPorPagarDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrosPasivosLargoPlazo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrosPasivosLargoPlazoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            totPasivoLargoPlazo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            totPasivoLargoPlazoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrosPasivos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrosPasivosDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            totalDelPasivo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            totalDelPasivoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            patrimonioNeto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            patrimonioNetoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            capitalSuscrito: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            capitalSuscritoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            capitalSuscritoNoPaga: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            capitalSuscritoNoPagaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            aportesSocios: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            aportesSociosDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            reservaLegal: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            reservaLegalDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrasReservas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            otrasReservasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            utilidadNoDistribuida: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            utilidadNoDistribuidaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            perdidaAcumulada: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            perdidaAcumuladaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            utilidadEjercito: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            utilidadEjercitoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            totalPatrimonio: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            totalPatrimonioDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            totalPasivoPatrimonio: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            totalPasivoPatrimonioDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            estadoResultadosFecha: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            estadoResultadosFechaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            ventasTotales: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            ventasTotalesDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            costoVentas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            costoVentasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            utilidadBruta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            utilidadBrutaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            gastosAdministracion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            gastosAdministracionDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            utilidadOperacional: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            utilidadOperacionalDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            ingresosNoOperacionales: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            ingresosNoOperacionalesDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            gastosNoOperacio: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            gastosNoOperacioDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            utilidadAntesImpuestos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            utilidadAntesImpuestosDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            participacionTrabajadores: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            participacionTrabajadoresDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            utilidadTributable: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            utilidadTributableDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            impuestoARenta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            impuestoARentaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            utilidadRepartible: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            utilidadRepartibleDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            indiceFinancieroFecha: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            indiceFinancieroFechaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            razonCorriente: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            razonCorrienteDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            razonCorrienteTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            pruebaAcida: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            pruebaAcidaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            pruebaAcidaTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            razonEfectivo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            razonEfectivoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            razonEfectivoTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            indiceApalanca: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            indiceApalancaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            indiceApalancaTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            razonDeudaTotal: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            razonDeudaTotalDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            razonDeudaTotalTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            indicesActividad: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            indicesActividadDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            indicesActividadTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            rotacionInventario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            rotacionInventarioDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            rotacionInventarioTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            diasVenta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            diasVentaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            diasVentaTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            rotacionCuentas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            rotacionCuentasDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            rotacionCuentasTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            diasPromedio: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            diasPromedioDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            diasPromedioTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            rotacionCuentasPagar: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            rotacionCuentasPagarDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            rotacionCuentasPagarTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            diasCuentasPagar: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            diasCuentasPagarDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            diasCuentasPagarTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            rotacionActivosTotales: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            rotacionActivosTotalesDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            rotacionActivosTotalesTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            indicesRentabilidad: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            indicesRentabilidadDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            indicesRentabilidadTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            margenUtilidad: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            margenUtilidadDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            margenUtilidadTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            rendimientoActivos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            rendimientoActivosDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            rendimientoActivosTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            rendimientoCapital: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            rendimientoCapitalDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            rendimientoCapitalTres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            cuentaFecha: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            cuentaFechaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            activoCorriente: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            activoCorrienteDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            activoNoCorriente: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            activoNoCorrienteDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            totalActivos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            totalActivosDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            pasivoCorriente: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            pasivoCorrienteDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            pasivoNoCorriente: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            pasivoNoCorrienteDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            totalPasivos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            totalPasivosDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            patrimonio: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            patrimonioDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            ventasCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            ventasCompletoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            utilidadPerdida: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            utilidadPerdidaDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            capitalTrabajo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            capitalTrabajoDos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            valor1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            valor2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            valor3: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            valor4: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            valor5: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            valor6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            valor7: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            valor8: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            valor9: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            valor10: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            porcentaje1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            porcentaje2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            porcentaje3: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            porcentaje4: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            porcentaje5: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            porcentaje6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            porcentaje7: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            porcentaje8: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            porcentaje9: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            porcentaje10: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],


            fortaleza: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.textPattern)]],
            fortaleza1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            fortaleza2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            fortaleza3: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            fortaleza4: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            fortaleza5: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            fortaleza6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            fortaleza7: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            fortaleza8: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            fortaleza9: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            fortaleza10: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            debilidad: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            debilidad1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            debilidad2: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            debilidad3: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            debilidad4: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            debilidad5: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            debilidad6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            debilidad7: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            debilidad8: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            debilidad9: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            debilidad10: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
            observacionesCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern(this.numberPattern)]],
        });
    }
    listaProvincias: Array<any> = [
    {name:"AZUAY",ciudades: ["CUENCA","GIRÓN","GUALACEO","NABÓN","PAUTE","PUCARA","SAN FERNANDO","SANTA ISABEL","SIGSIG","OÑA","CHORDELEG","EL PAN","SEVILLA DE ORO","GUACHAPALA","CAMILO PONCE ENRÍQUEZ"
    ]},{name:"BOLIVAR",ciudades:["GUARANDA","CHILLANES","CHIMBO","ECHEANDÍA","SAN MIGUEL","CALUMA","LAS NAVES"
    ]},{name:"CAÑAR",ciudades:["AZOGUES","BIBLIÁN","CAÑAR","LA TRONCAL","EL TAMBO","DÉLEG","SUSCAL"
    ]},{name:"CARCHI",ciudades:["TULCÁN","BOLÍVAR","ESPEJO","MIRA","MONTÚFAR","SAN PEDRO DE HUACA"
    ]},{name:"COTOPAXI",ciudades:["LATACUNGA","LA MANÁ","PANGUA","PUJILI","SALCEDO","SAQUISILÍ","SIGCHOS"
    ]},{name:"CHIMBORAZO",ciudades:["RIOBAMBA","ALAUSI","COLTA","CHAMBO","CHUNCHI","GUAMOTE","GUANO","PALLATANGA","PENIPE","CUMANDÁ"
    ]},{name:"EL ORO",ciudades:["MACHALA","ARENILLAS","ATAHUALPA","BALSAS","CHILLA","EL GUABO","HUAQUILLAS","MARCABELÍ","PASAJE","PIÑAS","PORTOVELO","SANTA ROSA","ZARUMA","LAS LAJAS"
    ]},{name:"ESMERALDAS",ciudades:["ESMERALDAS","ELOY ALFARO","MUISNE","QUININDÉ","SAN LORENZO","ATACAMES","RIOVERDE","LA CONCORDIA"
    ]},{name:"GUAYAS",ciudades:["GUAYAQUIL","ALFREDO BAQUERIZO MORENO (JUJÁN)","BALAO","BALZAR","COLIMES","DAULE","DURÁN","EL EMPALME","EL TRIUNFO","MILAGRO","NARANJAL","NARANJITO","PALESTINA","PEDRO CARBO","SAMBORONDÓN","SANTA LUCÍA","SALITRE (URBINA JADO)","SAN JACINTO DE YAGUACHI","PLAYAS","SIMÓN BOLÍVAR","CORONEL MARCELINO MARIDUEÑA","LOMAS DE SARGENTILLO","NOBOL","GENERAL ANTONIO ELIZALDE","ISIDRO AYORA"
    ]},{name:"IMBABURA",ciudades:["IBARRA","ANTONIO ANTE","COTACACHI","OTAVALO","PIMAMPIRO","SAN MIGUEL DE URCUQUÍ"
    ]},{name:"LOJA",ciudades:["LOJA","CALVAS","CATAMAYO","CELICA","CHAGUARPAMBA","ESPÍNDOLA","GONZANAMÁ","MACARÁ","PALTAS","PUYANGO","SARAGURO","SOZORANGA","ZAPOTILLO","PINDAL","QUILANGA","OLMEDO"
    ]},{name:"LOS RIOS",ciudades:["BABAHOYO","BABA","MONTALVO","PUEBLOVIEJO","QUEVEDO","URDANETA","VENTANAS","VÍNCES","PALENQUE","BUENA FÉ","VALENCIA","MOCACHE","QUINSALOMA"
    ]},{name:"MANABI",ciudades:["PORTOVIEJO","BOLÍVAR","CHONE","EL CARMEN","FLAVIO ALFARO","JIPIJAPA","JUNÍN","MANTA","MONTECRISTI","PAJÁN","PICHINCHA","ROCAFUERTE","SANTA ANA","SUCRE","TOSAGUA","24 DE MAYO","PEDERNALES","OLMEDO","PUERTO LÓPEZ","JAMA","JARAMIJÓ","SAN VICENTE"
    ]},{name:"MORONA SANTIAGO",ciudades:["MORONA","GUALAQUIZA","LIMÓN INDANZA","PALORA","SANTIAGO","SUCÚA","HUAMBOYA","SAN JUAN BOSCO","TAISHA","LOGROÑO","PABLO SEXTO","TIWINTZA"
    ]},{name:"NAPO",ciudades:["TENA","ARCHIDONA","EL CHACO","QUIJOS","CARLOS JULIO AROSEMENA TOLA"
    ]},{name:"PASTAZA",ciudades:["PASTAZA","MERA","SANTA CLARA","ARAJUNO"
    ]},{name:"PICHINCHA",ciudades:["QUITO","CAYAMBE","MEJIA","PEDRO MONCAYO","RUMIÑAHUI","SAN MIGUEL DE LOS BANCOS","PEDRO VICENTE MALDONADO","PUERTO QUITO"
    ]},{name:"TUNGURAHUA",ciudades:["AMBATO","BAÑOS DE AGUA SANTA","CEVALLOS","MOCHA","PATATE","QUERO","SAN PEDRO DE PELILEO","SANTIAGO DE PÍLLARO","TISALEO"
    ]},{name:"ZAMORA CHINCHIPE",ciudades:["ZAMORA","CHINCHIPE","NANGARITZA","YACUAMBI","YANTZAZA (YANZATZA)","EL PANGUI","CENTINELA DEL CÓNDOR","PALANDA","PAQUISHA"
    ]},{name:"GALAPAGOS",ciudades:["SAN CRISTÓBAL","ISABELA","SANTA CRUZ"
    ]},{name:"SUCUMBIOS",ciudades:["LAGO AGRIO","GONZALO PIZARRO","PUTUMAYO","SHUSHUFINDI","SUCUMBÍOS","CASCALES","CUYABENO"
    ]},{name:"ORELLANA",ciudades:["ORELLANA","AGUARICO","LA JOYA DE LOS SACHAS","LORETO"
    ]},{name:"SANTO DOMINGO DE LOS TSACHILAS",ciudades:["SANTO DOMINGO"
    ]},{name:"SANTA ELENA", ciudades:["SANTA ELENA","LA LIBERTAD","SALINAS"]},
  ];
  ciudades: Array<any>;
  cambioProvincia(count) {
    this.ciudades = this.listaProvincias.find(con => con.name == count).ciudades;
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

    addReporteCompleto() {
        this.submitted = true;
        this.save();
      }
      private save(): void {
        console.log(this.formularioCompleto);
        this.completoService.addInformeCompleto(this.formularioCompleto)
            .subscribe();
            Swal.fire({
              title:'Muy Bien',
              text:'Datos Guardados Éxitosamente',
              type: 'success'
            });
      }
}
