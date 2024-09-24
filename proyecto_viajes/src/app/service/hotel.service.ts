import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIO_HOTEL } from '../custom_properties';
import { Hotel } from '../model/Hotel';


@Injectable({
  providedIn: 'root'
})
export class HotelService {
  url:string=URL_SERVICIO_HOTEL;
  constructor(private http:HttpClient) { }

  buscarDestino():Observable<string[]>{

    return this.http.get<string[]>(this.url+"destinos");
  }
  buscarPorDestino(oplocalizacion:string):Observable<Hotel[]>{
    return this.http.get<Hotel[]>(this.url+"buscarPorLocalizacion/"+oplocalizacion);
  }
}
