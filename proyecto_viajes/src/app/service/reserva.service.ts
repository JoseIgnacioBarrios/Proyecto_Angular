import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_SERVICIO_RESERVA } from '../custom_properties';
import { Reserva } from '../model/Reserva';
import { Cliente } from '../model/Cliente';
import { Hotel } from '../model/Hotel';
import { Vuelo } from '../model/Vuelo';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  url:string=URL_SERVICIO_RESERVA;
  constructor(private http:HttpClient) { }

  crear(usuario:string,idHotel:number,idvuelo:number):Observable<string>{

    var reserva=new Reserva(usuario,new Hotel(idHotel),new Vuelo(idvuelo) );

    return this.http.post(this.url+"altaReseva",reserva, { responseType: 'text' });
  }
}
