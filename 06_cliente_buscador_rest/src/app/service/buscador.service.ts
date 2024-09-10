import { Injectable } from '@angular/core';
import { Resultado } from '../model/Resultado';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  //inyecctamos a la variable http el cliente rest
  constructor(private http:HttpClient){

  }
  //Observable es asincrono ya cuando este lista la respuesta nos avisara
  //termino suscripcion
  buscar(tematica:string):Observable<Resultado[]>{

    let url:string= "http://localhost:8080/buscar/"+tematica;
    return this.http.get<Resultado[]>(url);
  }
}
