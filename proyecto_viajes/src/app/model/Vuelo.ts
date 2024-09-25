export class Vuelo{
  idvuelo:number;
  company:string;
  fecha:string;
  precio:number;
  plazas:number;
  destino:string;

  constructor(idvuelo?:number, plazas?:number,company?:string,  fecha?:string, precio?:number,  destino?:string){
    this.idvuelo=idvuelo;
    this.company=company;
    this.fecha=fecha;
    this.precio=precio;
    this.plazas=plazas;
    this.destino=destino;
  }
}
