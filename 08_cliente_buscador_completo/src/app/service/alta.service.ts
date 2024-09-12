
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resultado } from '../model/Resultado';
import { Observable } from 'rxjs';
import { PASS, USER } from '../custom_properties';

@Injectable({
  providedIn: 'root'
})
export class AltaService {

  url:string ="http://localhost:9000/";
  constructor(private http:HttpClient) { }

  alta(resultado:Resultado):Observable<string>{

    // let user="admin";
    // let pwd="admin";

    //btoa codifica en basic 64
    let codificado=btoa(USER+":"+PASS);
    //creamos el encabezado
    let headrs=new HttpHeaders();
    headrs=headrs.set("Authorization","basic"+codificado);

    return this.http.post<string>(this.url+"alta",resultado,{headers:headrs});

  }


}
