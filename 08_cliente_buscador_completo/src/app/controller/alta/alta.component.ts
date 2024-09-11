import { Resultado } from '../../model/Resultado';
import { AltaService } from './../../service/alta.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {

  newUrl:Resultado= new Resultado("","","");
  tematica:string;
  estadodeAlta:string;
  resultado:Resultado[]=[];

  constructor(private altaService:AltaService){

  }


  alta():void{

    this.altaService.alta(this.newUrl).subscribe(data =>  {
      if(data){
        this.estadodeAlta="Item grabado correctamente";
      }else{
        this.estadodeAlta="El item no se ha grabado";
      }});
    console.log("ESTADO: "+this.estadodeAlta);
  }



}
