import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class LibreriaService {

  constructor(private http:HttpClient) { }


  librosPorPrecio(min:number,max:number):Observable<book[]>{
    //let url="http://localhost:10000/libreria/boock/"+min+"/"+max;
    let url="http://localhost:11000/slibreria/libreria/boocks/"+min+"/"+max;
    return this.http.get<book[]>(url);
  }
}
