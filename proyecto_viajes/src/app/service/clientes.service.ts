import { Injectable } from '@angular/core';
import { URL_SERVICIO_CLIENT } from '../custom_properties';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  url:string=URL_SERVICIO_CLIENT;
  constructor(private http:HttpClient) { }


  validacion(usuario:string,password:string):Observable<string>{
    return this.http.get(this.url+"ValidarUserPass/"+usuario+"/"+password, { responseType: 'text' });
  }

  buscarUsuario(usuario:string):Observable<Cliente>{
    return this.http.get<Cliente>(this.url+"buscarPorUsuario/"+usuario);
  }

  save(cliente:Cliente):Observable<string>{
    return this.http.post(this.url+"save",cliente,{ responseType: 'text' });
  }

}
