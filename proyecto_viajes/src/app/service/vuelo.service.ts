import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vuelo } from '../model/Vuelo';
import { URL_SERVICIO_VUELO } from '../custom_properties';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  url:string=URL_SERVICIO_VUELO;
  constructor(private http:HttpClient) { }

  vuelosDisponible(destino:string,npersonas:string):Observable<Vuelo[]>{
    return this.http.get<Vuelo[]>(this.url+"vuelosDisponible/"+destino+"/"+parseInt(npersonas,10));
  }
}
