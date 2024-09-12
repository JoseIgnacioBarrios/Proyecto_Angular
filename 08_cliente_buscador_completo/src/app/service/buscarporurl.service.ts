
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resultado } from '../model/Resultado';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscarporurlService {

  url:string ="http://localhost:9000/buscarPorUrl";
  constructor(private http:HttpClient) { }

  buscar(url:string):Observable<Resultado>{

    let params=new HttpParams();
    params=params.set("url",url);

    //return this.http.get<Resultado>(this.url+"?url="+url);
    return this.http.get<Resultado>(this.url,{params:params});
  }
}
