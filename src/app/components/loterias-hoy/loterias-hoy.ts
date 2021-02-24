import { Component, OnInit } from "@angular/core";
import { loteriasHoy } from "../../../assets/loteriasHoy";

@Component({
  selector: "app-json-to",
  templateUrl: "./loterias-hoy.html",
  styleUrls: ["./loterias-hoy.css"]
})
export class JsonToComponent implements OnInit {
  resultadosHoy = loteriasHoy;

  plantillaCentralHtml = `<div class="row"> <div class="col-lg-17" id="TemplateLoteria"> <br><div class="contentLoteria"> <div class="tituloLoteria"> <h3>RESULTADOS HOY</h3> </div><br><div class="tablaLoteria"> <table id="TablaLot"> <thead> <tr> <th>Loteria</th> <th>Ganó</th> <th>Favorito</th> <th>Fecha</th> <th>Hora</th> </tr></thead> <tbody> <tr> <th> <p>Cauca</p></th> <td> <p>${
    this.resultadosHoy[0].numeroCauca
  }</p></td><td> <p>${this.resultadosHoy[0].favoritoCauca}</p></td><td> <p>${
    this.resultadosHoy[0].fechaCauca
  }</p></td><td> <p>${
    this.resultadosHoy[0].horaCauca
  }</p></td></tr><tr> <th> <p>Boyaca</p></th> <td> <p>${
    this.resultadosHoy[1].numeroBoyaca
  }</p></td><td> <p>${this.resultadosHoy[1].favoritoBoyaca}</p></td><td> <p>${
    this.resultadosHoy[1].fechaBoyaca
  }</p></td><td> <p>${
    this.resultadosHoy[1].horaBoyaca
  }</p></td></tr><tr> <th> <p>Chontico Noche</p></th> <td> <p>${
    this.resultadosHoy[2].numeroChonticoNoche
  }</p></td><td> <p>${
    this.resultadosHoy[2].favoritoChonticoNoche
  }</p></td><td> <p>${
    this.resultadosHoy[2].fechaChonticoNoche
  }</p></td><td> <p>${
    this.resultadosHoy[2].horaChonticoNoche
  }</p></td></tr><tr> <th> <p>Antioquenita 2</p></th> <td> <p>${
    this.resultadosHoy[3].numeroAntioquenita2
  }</p></td><td> <p>${
    this.resultadosHoy[3].favoritoAntioquenita2
  }</p></td><td> <p>${
    this.resultadosHoy[3].fechaAntioquenita2
  }</p></td><td> <p>${
    this.resultadosHoy[3].horaAntioquenita2
  }</p></td></tr><tr> <th> <p>Pick 4 Día</p></th> <td> <p>${
    this.resultadosHoy[4].numeroPick4Dia
  }</p></td><td> <p>${this.resultadosHoy[4].favoritoPick4Dia}</p></td><td> <p>${
    this.resultadosHoy[4].fechaPick4Dia
  }</p></td><td> <p>${
    this.resultadosHoy[4].horaPick4Dia
  }</p></td></tr><tr> <th> <p>Dorado Noche</p></th> <td> <p>${
    this.resultadosHoy[5].numeroDoradoNoche
  }</p></td><td> <p>${
    this.resultadosHoy[5].favoritoDoradoNoche
  }</p></td><td> <p>${this.resultadosHoy[5].fechaDoradoNoche}</p></td><td> <p>${
    this.resultadosHoy[5].horaDoradoNoche
  }</p></td></tr><tr> <th> <p>Paisita 1</p></th> <td> <p>${
    this.resultadosHoy[6].numeroPaisita1
  }</p></td><td> <p>${this.resultadosHoy[6].favoritoPaisita1}</p></td><td> <p>${
    this.resultadosHoy[6].fechaPaisita1
  }</p></td><td> <p>${
    this.resultadosHoy[6].horaPaisita1
  }</p></td></tr><tr> <th> <p>Paisita 2 </p></th> <td> <p>${
    this.resultadosHoy[7].numeroPaisita2
  }</p></td><td> <p>${this.resultadosHoy[7].favoritoPaisita2}</p></td><td> <p>${
    this.resultadosHoy[7].fechaPaisita2
  }</p></td><td> <p>${
    this.resultadosHoy[7].horaPaisita2
  }</p></td></tr><tr> <th> <p>Pick 3 Noche</p></th> <td> <p>${
    this.resultadosHoy[8].numeroPick3Noche
  }</p></td><td> <p>${
    this.resultadosHoy[8].favoritoPick3Noche
  }</p></td><td> <p>${this.resultadosHoy[8].fechaPick3Noche}</p></td><td> <p>${
    this.resultadosHoy[8].horaPick3Noche
  }</p></td></tr><tr> <th> <p>Pick 4 Noche</p></th> <td> <p>${
    this.resultadosHoy[9].numeroPick4Noche
  }</p></td><td> <p>${
    this.resultadosHoy[9].favoritoPick4Noche
  }</p></td><td> <p>${this.resultadosHoy[9].fechaPick4Noche}</p></td><td> <p>${
    this.resultadosHoy[9].horaPick4Noche
  }</p></td></tr><tr> <th> <p>Cafeterito Tarde</p></th> <td> <p>${
    this.resultadosHoy[10].numeroCafeteritoTarde
  }</p></td><td> <p>${
    this.resultadosHoy[10].favoritoCafeteritoTarde
  }</p></td><td> <p>${
    this.resultadosHoy[10].fechaCafeteritoTarde
  }</p></td><td> <p>${
    this.resultadosHoy[10].horaCafeteritoTarde
  }</p></td></tr><tr> <th> <p>Chontico Día</p></th> <td> <p>${
    this.resultadosHoy[11].numeroChonticoDia
  }</p></td><td> <p>${
    this.resultadosHoy[11].favoritoChonticoDia
  }</p></td><td> <p>${
    this.resultadosHoy[11].fechaChonticoDia
  }</p></td><td> <p>${
    this.resultadosHoy[11].horaChonticoDia
  }</p></td></tr><tr> <th> <p>Dorado Tarde</p></th> <td> <p>${
    this.resultadosHoy[12].numeroDoradoTarde
  }</p></td><td> <p>${
    this.resultadosHoy[12].favoritoDoradoTarde
  }</p></td><td> <p>${
    this.resultadosHoy[12].fechaDoradoTarde
  }</p></td><td> <p>${
    this.resultadosHoy[12].horaDoradoTarde
  }</p></td></tr><tr> <th> <p>Cafeterito Noche</p></th> <td> <p>${
    this.resultadosHoy[13].numeroCafeteritoNoche
  }</p></td><td> <p>${
    this.resultadosHoy[13].favoritoCafeteritoNoche
  }</p></td><td> <p>${
    this.resultadosHoy[13].fechaCafeteritoNoche
  }</p></td><td> <p>${
    this.resultadosHoy[13].horaCafeteritoNoche
  }</p></td></tr><tr> <th> <p>Dorado Dia</p></th> <td> <p>${
    this.resultadosHoy[14].numeroDoradoDia
  }</p></td><td> <p>${
    this.resultadosHoy[14].favoritoDoradoDia
  }</p></td><td> <p>${this.resultadosHoy[14].fechaDoradoDia}</p></td><td> <p>${
    this.resultadosHoy[14].horaDoradoDia
  }</p></td></tr><tr> <th> <p>Pijao</p></th> <td> <p>${
    this.resultadosHoy[15].numeroPijao
  }</p></td><td> <p>${this.resultadosHoy[15].favoritoPijao}</p></td><td> <p>${
    this.resultadosHoy[15].fechaPijao
  }</p></td><td> <p>${
    this.resultadosHoy[15].horaPijao
  }</p></td></tr><tr> <th> <p>Paisita 3</p></th> <td> <p>${
    this.resultadosHoy[16].numeroPaisita3
  }</p></td><td> <p>${
    this.resultadosHoy[16].favoritoPaisita3
  }</p></td><td> <p>${this.resultadosHoy[16].fechaPaisita3}</p></td><td> <p>${
    this.resultadosHoy[16].horaPaisita3
  }</p></td></tr><tr> <th> <p>Antioquenita 1</p></th> <td> <p>${
    this.resultadosHoy[17].numeroAntioquenita1
  }</p></td><td> <p>${
    this.resultadosHoy[17].favoritoAntioquenita1
  }</p></td><td> <p>${
    this.resultadosHoy[17].fechaAntioquenita1
  }</p></td><td> <p>${
    this.resultadosHoy[17].horaAntioquenita1
  }</p></td></tr><tr> <th> <p>Pick 3 Dia</p></th> <td> <p>${
    this.resultadosHoy[18].numeroPick3Dia
  }</p></td><td> <p>${
    this.resultadosHoy[18].favoritoPick3Dia
  }</p></td><td> <p>${this.resultadosHoy[18].fechaPick3Dia}</p></td><td> <p>${
    this.resultadosHoy[18].horaPick3Dia
  }</p></td></tr></tbody> </table> </div></div></div></div>`;

  plantillaLateralHtml = `<div class="row"> <div class="col-lg-17"> <br><div id="LoteriaLateral" class="LoteriaLateral"> <div class="tituloNoticia"> <h4>RESULTADOS HOY</h4> </div><div class="contenidoNoticia"> <table> <thead> <th>LOTERIA</th> <th>GANÓ</th> <th>FECHA</th> </thead> <tbody> <tr> <th>Cauca</th> <td>${
    this.resultadosHoy[0].numeroCauca
  }</td><td>${
    this.resultadosHoy[0].fechaCauca
  }</td></tr><tr> <th>Boyaca</th> <td>${
    this.resultadosHoy[1].numeroBoyaca
  }</td><td>${
    this.resultadosHoy[1].fechaBoyaca
  }</td></tr><tr> <th>Chontico Noche</th> <td>${
    this.resultadosHoy[2].numeroChonticoNoche
  }</td><td>${
    this.resultadosHoy[2].fechaChonticoNoche
  }</td></tr><tr> <th>Antioquenita 2</th> <td>${
    this.resultadosHoy[3].numeroAntioquenita2
  }</td><td>${
    this.resultadosHoy[3].fechaAntioquenita2
  }</td></tr><tr> <th>Pick 4 Día</th> <td>${
    this.resultadosHoy[4].numeroPick4Dia
  }</td><td>${
    this.resultadosHoy[4].fechaPick4Dia
  }</td></tr><tr> <th>Dorado Noche</th> <td>${
    this.resultadosHoy[5].numeroDoradoNoche
  }</td><td>${
    this.resultadosHoy[5].fechaDoradoNoche
  }</td></tr><tr> <th>Paisita 1</th> <td>${
    this.resultadosHoy[6].numeroPaisita1
  }</td><td>${
    this.resultadosHoy[6].fechaPaisita1
  }</td></tr><tr> <th>Paisita 2</th> <td>${
    this.resultadosHoy[7].numeroPaisita2
  }</td><td>${
    this.resultadosHoy[7].fechaPaisita2
  }</td></tr><tr> <th>Pick 3 Noche</th> <td>${
    this.resultadosHoy[8].numeroPick3Noche
  }</td><td>${
    this.resultadosHoy[8].fechaPick3Noche
  }</td></tr><tr> <th>Pick 4 Noche</th> <td>${
    this.resultadosHoy[9].numeroPick4Noche
  }</td><td>${
    this.resultadosHoy[9].fechaPick4Noche
  }</td></tr><tr> <th>Cafeterito Tarde</th> <td>${
    this.resultadosHoy[10].numeroCafeteritoTarde
  }</td><td>${
    this.resultadosHoy[10].fechaCafeteritoTarde
  }</td></tr><tr> <th>Chontico Día</th> <td>${
    this.resultadosHoy[11].numeroChonticoDia
  }</td><td>21-02-2021</td></tr><tr> <th>Dorado Tarde</th> <td>${
    this.resultadosHoy[12].numeroDoradoTarde
  }</td><td>20-02-2021</td></tr><tr> <th>Cafeterito Noche</th> <td>${
    this.resultadosHoy[13].numeroCafeteritoNoche
  }</td><td>${
    this.resultadosHoy[13].fechaCafeteritoNoche
  }</td></tr></tr><th>Dorado Dia</th> <td>${
    this.resultadosHoy[14].numeroDoradoDia
  }</td><td>${
    this.resultadosHoy[14].fechaDoradoDia
  }</td></tr></tr><th>Pijao</th> <td>${
    this.resultadosHoy[15].numeroPijao
  }</td><td>${
    this.resultadosHoy[15].fechaPijao
  }</td></tr></tr><th>Paisita 3</th> <td>${
    this.resultadosHoy[16].numeroPaisita3
  }</td><td>${
    this.resultadosHoy[16].fechaPaisita3
  }</td></tr></tr><th>Antioquenita 1</th> <td>${
    this.resultadosHoy[17].numeroAntioquenita1
  }</td><td>${
    this.resultadosHoy[17].fechaAntioquenita1
  }</td></tr></tr><th>Pick 3 Dia</th> <td>${
    this.resultadosHoy[18].numeroPick3Dia
  }</td><td>${
    this.resultadosHoy[18].fechaPick3Dia
  }</td></tr></tbody> </table> </div></div></div></div>`;

  constructor() {}

  ngOnInit() {}
}
