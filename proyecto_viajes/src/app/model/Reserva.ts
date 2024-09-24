import { Hotel } from "./Hotel";
import { Vuelo } from "./Vuelo";

export class Reserva{
  //precio:number;
  usuario:string;
  hotel:Hotel;
  vuelo:Vuelo;
  constructor(usuario?:string,hotel?:Hotel,vuelo?:Vuelo){
    this.usuario=usuario;
    this.hotel=hotel;
    this.vuelo=vuelo;
  }
}
