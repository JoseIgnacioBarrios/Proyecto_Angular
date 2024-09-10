

import { BuscadorService } from '../../service/buscador.service';
import { Resultado } from './../../model/Resultado';
import { Component } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {

  constructor(private buscadorService:BuscadorService){

  }
  //variable a mostrar en la vista
  resultado:Resultado[]=[];
  //variable recibido por el usuario que decea buscar
  tematica:string;

  buscar():void{
    this.buscadorService.buscar(this.tematica) //observable de resultados Observable<Resultado[]>
        .subscribe( data => this.resultado=data); //ahora tendremos acceso al dato con la suscripcion recordar llamada asincrona
  }

}
