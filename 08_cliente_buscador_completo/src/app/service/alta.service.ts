
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resultado } from '../model/Resultado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AltaService {

  url:string ="http://localhost:8080/";
  constructor(private http:HttpClient) { }

  alta(resultado:Resultado):Observable<string>{

    return this.http.post<string>(this.url+"alta",resultado);

  }


}
