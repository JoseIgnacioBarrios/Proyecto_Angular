import { Hotel } from "./Hotel";
import { Vuelo } from "./Vuelo";

export class Reserva{
  //precio:number;
  idreserva:number;
  usuario:string;
  precio:number;
  hotel:Hotel;
  vuelo:Vuelo;
  constructor(usuario?:string,hotel?:Hotel,vuelo?:Vuelo,precio?:number,idreserva?:number){
    this.usuario=usuario;
    this.hotel=hotel;
    this.vuelo=vuelo;
    this.precio=precio;
    idreserva=idreserva;
  }
}
