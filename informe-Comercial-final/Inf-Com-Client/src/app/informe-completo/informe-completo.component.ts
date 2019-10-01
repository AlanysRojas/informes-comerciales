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
    checksEmpresas: string;
    empresasRelacionadasCompleto: string;
    grupoEconomicoCompleto: string;
    codigoActividadCompleto: string;
    anioPagoImpuestoCompleto: string;
    pagoRentaUnoCompleto: string;
    anioPagoImpuestoDosCompleto: string;
    pagoRentaDosCompleto: string;
    anioSalidaDivisasCompleto: string;
    salidaDivisasCompletoUno: string;
    salidaDivisasCompletoDos: string;
    checksCalificaciones: string;
    requeridoClienteCompleto: string;
    requeridoServiratingCompleto: string;
    checksInfraestructura: string;
    checksSucursalesCompleto: string;
    direccionSucursalCompleto: string;
    numeroEmpleadosExpress: string;
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
    fechaCorteCompleta6: string;
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
    listaProvincias: Array<any> = [
      {
        name: "AZUAY", ciudades: ["CUENCA", "GIRÓN", "GUALACEO", "NABÓN", "PAUTE", "PUCARA", "SAN FERNANDO", "SANTA ISABEL", "SIGSIG", "OÑA", "CHORDELEG", "EL PAN", "SEVILLA DE ORO", "GUACHAPALA", "CAMILO PONCE ENRÍQUEZ"
        ]
      }, {
        name: "BOLIVAR", ciudades: ["GUARANDA", "CHILLANES", "CHIMBO", "ECHEANDÍA", "SAN MIGUEL", "CALUMA", "LAS NAVES"
        ]
      }, {
        name: "CAÑAR", ciudades: ["AZOGUES", "BIBLIÁN", "CAÑAR", "LA TRONCAL", "EL TAMBO", "DÉLEG", "SUSCAL"
        ]
      }, {
        name: "CARCHI", ciudades: ["TULCÁN", "BOLÍVAR", "ESPEJO", "MIRA", "MONTÚFAR", "SAN PEDRO DE HUACA"
        ]
      }, {
        name: "COTOPAXI", ciudades: ["LATACUNGA", "LA MANÁ", "PANGUA", "PUJILI", "SALCEDO", "SAQUISILÍ", "SIGCHOS"
        ]
      }, {
        name: "CHIMBORAZO", ciudades: ["RIOBAMBA", "ALAUSI", "COLTA", "CHAMBO", "CHUNCHI", "GUAMOTE", "GUANO", "PALLATANGA", "PENIPE", "CUMANDÁ"
        ]
      }, {
        name: "EL ORO", ciudades: ["MACHALA", "ARENILLAS", "ATAHUALPA", "BALSAS", "CHILLA", "EL GUABO", "HUAQUILLAS", "MARCABELÍ", "PASAJE", "PIÑAS", "PORTOVELO", "SANTA ROSA", "ZARUMA", "LAS LAJAS"
        ]
      }, {
        name: "ESMERALDAS", ciudades: ["ESMERALDAS", "ELOY ALFARO", "MUISNE", "QUININDÉ", "SAN LORENZO", "ATACAMES", "RIOVERDE", "LA CONCORDIA"
        ]
      }, {
        name: "GUAYAS", ciudades: ["GUAYAQUIL", "ALFREDO BAQUERIZO MORENO (JUJÁN)", "BALAO", "BALZAR", "COLIMES", "DAULE", "DURÁN", "EL EMPALME", "EL TRIUNFO", "MILAGRO", "NARANJAL", "NARANJITO", "PALESTINA", "PEDRO CARBO", "SAMBORONDÓN", "SANTA LUCÍA", "SALITRE (URBINA JADO)", "SAN JACINTO DE YAGUACHI", "PLAYAS", "SIMÓN BOLÍVAR", "CORONEL MARCELINO MARIDUEÑA", "LOMAS DE SARGENTILLO", "NOBOL", "GENERAL ANTONIO ELIZALDE", "ISIDRO AYORA"
        ]
      }, {
        name: "IMBABURA", ciudades: ["IBARRA", "ANTONIO ANTE", "COTACACHI", "OTAVALO", "PIMAMPIRO", "SAN MIGUEL DE URCUQUÍ"
        ]
      }, {
        name: "LOJA", ciudades: ["LOJA", "CALVAS", "CATAMAYO", "CELICA", "CHAGUARPAMBA", "ESPÍNDOLA", "GONZANAMÁ", "MACARÁ", "PALTAS", "PUYANGO", "SARAGURO", "SOZORANGA", "ZAPOTILLO", "PINDAL", "QUILANGA", "OLMEDO"
        ]
      }, {
        name: "LOS RIOS", ciudades: ["BABAHOYO", "BABA", "MONTALVO", "PUEBLOVIEJO", "QUEVEDO", "URDANETA", "VENTANAS", "VÍNCES", "PALENQUE", "BUENA FÉ", "VALENCIA", "MOCACHE", "QUINSALOMA"
        ]
      }, {
        name: "MANABI", ciudades: ["PORTOVIEJO", "BOLÍVAR", "CHONE", "EL CARMEN", "FLAVIO ALFARO", "JIPIJAPA", "JUNÍN", "MANTA", "MONTECRISTI", "PAJÁN", "PICHINCHA", "ROCAFUERTE", "SANTA ANA", "SUCRE", "TOSAGUA", "24 DE MAYO", "PEDERNALES", "OLMEDO", "PUERTO LÓPEZ", "JAMA", "JARAMIJÓ", "SAN VICENTE"
        ]
      }, {
        name: "MORONA SANTIAGO", ciudades: ["MORONA", "GUALAQUIZA", "LIMÓN INDANZA", "PALORA", "SANTIAGO", "SUCÚA", "HUAMBOYA", "SAN JUAN BOSCO", "TAISHA", "LOGROÑO", "PABLO SEXTO", "TIWINTZA"
        ]
      }, {
        name: "NAPO", ciudades: ["TENA", "ARCHIDONA", "EL CHACO", "QUIJOS", "CARLOS JULIO AROSEMENA TOLA"
        ]
      }, {
        name: "PASTAZA", ciudades: ["PASTAZA", "MERA", "SANTA CLARA", "ARAJUNO"
        ]
      }, {
        name: "PICHINCHA", ciudades: ["QUITO", "CAYAMBE", "MEJIA", "PEDRO MONCAYO", "RUMIÑAHUI", "SAN MIGUEL DE LOS BANCOS", "PEDRO VICENTE MALDONADO", "PUERTO QUITO"
        ]
      }, {
        name: "TUNGURAHUA", ciudades: ["AMBATO", "BAÑOS DE AGUA SANTA", "CEVALLOS", "MOCHA", "PATATE", "QUERO", "SAN PEDRO DE PELILEO", "SANTIAGO DE PÍLLARO", "TISALEO"
        ]
      }, {
        name: "ZAMORA CHINCHIPE", ciudades: ["ZAMORA", "CHINCHIPE", "NANGARITZA", "YACUAMBI", "YANTZAZA (YANZATZA)", "EL PANGUI", "CENTINELA DEL CÓNDOR", "PALANDA", "PAQUISHA"
        ]
      }, {
        name: "GALAPAGOS", ciudades: ["SAN CRISTÓBAL", "ISABELA", "SANTA CRUZ"
        ]
      }, {
        name: "SUCUMBIOS", ciudades: ["LAGO AGRIO", "GONZALO PIZARRO", "PUTUMAYO", "SHUSHUFINDI", "SUCUMBÍOS", "CASCALES", "CUYABENO"
        ]
      }, {
        name: "ORELLANA", ciudades: ["ORELLANA", "AGUARICO", "LA JOYA DE LOS SACHAS", "LORETO"
        ]
      }, {
        name: "SANTO DOMINGO DE LOS TSACHILAS", ciudades: ["SANTO DOMINGO"
        ]
      }, { name: "SANTA ELENA", ciudades: ["SANTA ELENA", "LA LIBERTAD", "SALINAS"] },
    ];
    ciudades: Array<any>;
    cambioProvincia(count) {
      this.ciudades = this.listaProvincias.find(con => con.name == count).ciudades;
    }
  
  

  emailPattern = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  textPattern = new RegExp(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ\s ]+$/);
  numberPattern = new RegExp(/^[0-9 ]+$/);
  paginaWebPattern = new RegExp(/^((https?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/)
  dineroPattern = new RegExp(/^\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$/);


  constructor(public fb: FormBuilder, private proveedoresService:FormProveedoresServiceService) { 

    this.reporteCompleto = this.fb.group({

      fechaElaboracionCompleta: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(this.textPattern)]],
      solicitanteCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(this.textPattern)]],
      razonSocialCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(this.textPattern)]],
      nombreComercialCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(this.textPattern)]],
      rucCompleto:['', [Validators.required, Validators.minLength(13), Validators.maxLength(13), Validators.pattern(this.numberPattern)]],
      formaLegalCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(this.textPattern)]],
      estadoCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(this.textPattern)]],
      capitalSubscritoCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      inicioActividadesCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
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
      checksEmpresas: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(this.textPattern)]],
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
      checksCalificaciones: ['', [Validators.required]],
      requeridoClienteCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      requeridoServiratingCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      checksInfraestructura: ['', [Validators.required]],
      checksSucursalesCompleto: ['', [Validators.required]],
      direccionSucursalCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(this.textPattern)]],
      numeroEmpleadosExpress: ['', [Validators.required]],
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
      fechaCorteCompleta6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      institucionCompleta6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      tipoRiesgoCompleta6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      tipoCreditoCompleta6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      vincCompleta6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      totalVencerCompleta6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      noDevInteresesCompleta6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      totalVencidoCompleta6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      demJudCompleta6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      cartCastCompleta6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      saldoDeudaCompleta6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      acConcCompleta6: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
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
      fechaMayPlazoVencido1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      mayValorVencidoCompleto1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      fechaMayValorVencido1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      endeudamientoPromCompleto1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      fechaEndeudamiento1: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      detallOperacionesVencidasCompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    });
  }

  ngOnInit() {
  }

 

}
