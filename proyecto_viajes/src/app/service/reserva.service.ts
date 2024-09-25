import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_SERVICIO_RESERVA } from '../custom_properties';
import { Reserva } from '../model/Reserva';
import { Cliente } from '../model/Cliente';
import { Hotel } from '../model/Hotel';
import { Vuelo } from '../model/Vuelo';
import { MenuComponent } from '../controller/menu/menu.component';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  url:string=URL_SERVICIO_RESERVA;
  constructor(private http:HttpClient) { }

  crear(usuario:string,contrasena:string,idHotel:number,idvuelo:number,npersonas:number):Observable<string>{

    var reserva=new Reserva(usuario,new Hotel(idHotel),new Vuelo(idvuelo,npersonas) );
    console.log(reserva);
    console.log("USUARIO: "+usuario + contrasena);
    //btoa codifica en basic 64
     let codificado=btoa(contrasena+":"+contrasena);
    //let codificado=btoa("user1:user1");
    // //creamos el encabezado
     let headers=new HttpHeaders();
     headers=headers.set("Authorization","Basic "+codificado);


    return this.http.post(this.url+"altaReseva",reserva, { headers:headers,responseType: 'text' });
  }

  reservas(usuario:string):Observable<Reserva[]>{
    return this.http.get<Reserva[]>(this.url+"buscarPorCliente/"+usuario);
  }
}
