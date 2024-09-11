import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../model/Pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http:HttpClient) { }

  url:string="http://localhost:9000/pais/";

  opcionesCombobox():Observable<string[]>{
    return this.http.get<string[]>(this.url+"listaContinentes");
  }

  continentes(opcion:string):Observable<Pais[]>{
    return this.http.get<Pais[]>(this.url+"paisesPorContinente/"+opcion);
  }
}
