import { BuscarporurlService } from './../../service/buscarporurl.service';

import { Component } from '@angular/core';
import { Resultado } from '../../model/Resultado';

@Component({
  selector: 'app-buscar-por-url',
  templateUrl: './buscar-por-url.component.html',
  styleUrl: './buscar-por-url.component.css'
})
export class BuscarPorUrlComponent {

  url:string;
  resultado:Resultado;
  constructor(private buscarporurlService:BuscarporurlService){

  }

  buscar():void{
    this.buscarporurlService.buscar(this.url).subscribe(data=> this.resultado=data);
  }
}
