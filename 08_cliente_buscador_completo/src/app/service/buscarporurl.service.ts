
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resultado } from '../model/Resultado';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscarporurlService {

  url:string ="http://localhost:8080/buscarPorUrl/";
  constructor(private http:HttpClient) { }

  buscar(url:string):Observable<Resultado>{
    console.log(url);
    return this.http.get<Resultado>(this.url+url);
  }
}
