export class Vuelo{
  idvuelo:number;
  plazas:number;
  precio:number;

  constructor(idvuelo:number,plaza:number,precio:number){
    this.idvuelo=idvuelo;
    this.plazas=plaza;
    this.precio=precio;
  }
}
