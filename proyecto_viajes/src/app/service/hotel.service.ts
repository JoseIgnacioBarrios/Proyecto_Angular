import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIO_HOTEL } from '../custom_properties';
import { Hotel } from '../model/Hotel';
import { MenuComponent } from '../controller/menu/menu.component';


@Injectable({
  providedIn: 'root'
})
export class HotelService {
  url:string=URL_SERVICIO_HOTEL;
  constructor(private http:HttpClient) { }

  buscarDestino():Observable<string[]>{

    //btoa codifica en basic 64
    // let codificado=btoa(miusuario+":"+mipassword);
    // //creamos el encabezado
    // let headrs=new HttpHeaders();
    // headrs=headrs.set("Authorization","basic"+codificado);

    return this.http.get<string[]>(this.url+"destinos");//,{headers:headrs});
  }

  buscarPorDestino(oplocalizacion:string):Observable<Hotel[]>{
    return this.http.get<Hotel[]>(this.url+"buscarPorLocalizacion/"+oplocalizacion);
  }
}
