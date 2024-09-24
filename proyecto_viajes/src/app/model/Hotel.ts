export class Hotel{
  idHotel:number;
  nombre:string;
  categoria:string;
  precio:string;
  disponible:string;
  localizacion:string;

  constructor(idHotel?:number,nombre?:string, categoria?:string,  precio?:string, disponible?:string,  localizacion?:string){
    this.idHotel=idHotel;
    this.nombre=nombre;
    this.categoria=categoria;
    this.precio=precio;
    this.disponible=disponible;
    this.localizacion=localizacion;
  }
}
