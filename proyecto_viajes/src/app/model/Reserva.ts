import { Hotel } from "./Hotel";
import { Vuelo } from "./Vuelo";

export class Reserva{
  precio:number;
  usuario:string;
  hotel:Hotel;
  vuelo:Vuelo;
  constructor(precio:number,usuario:string,hotel:Hotel,vuelo:Vuelo){
    this.precio=precio;
    this.usuario=usuario;
    this.hotel=hotel;
    this.vuelo=vuelo;
  }
}
