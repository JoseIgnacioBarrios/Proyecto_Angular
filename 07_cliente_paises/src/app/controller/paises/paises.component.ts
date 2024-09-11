import { Pais } from '../../model/Pais';
import { PaisesService } from './../../service/paises.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {
  opcion:string="-";
  listaOpciones:string[];
  paises:Pais[];

  constructor(private paisesService:PaisesService){
    //llenar el combobox
    this.opcionesCombobox();
  }

  opcionesCombobox():void{
    this.paisesService.opcionesCombobox().subscribe(data => this.listaOpciones=data);
  }

  buscarPorContinentes():void{
    this.paisesService.continentes(this.opcion).subscribe(data => this.paises=data);
  }

}
