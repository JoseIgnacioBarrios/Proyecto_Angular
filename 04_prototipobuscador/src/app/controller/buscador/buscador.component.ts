import { Resultado } from './../../model/Resultado';
import { Component } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {

  memoriaResultado:Resultado[]=[
                                new Resultado("http://www.fnac.es/","libros","Libros y más"),
                                new Resultado("http://www.mybook.com/","libros","librería de temas varios"),
                                new Resultado("http://www.game.es/","juegos","Juegos variados"),
                                new Resultado("http://www.music.es/","música","Lamejor música"),
                                new Resultado("http://www.tech.com/","libros","Libros técnicos"),
                                new Resultado("http://www.eljuego.es/","juegos","Juegos on-line")
                               ]
  resultado:Resultado[]=[];
  tematica:string;

  buscar():void{
    // this.memoriaResultado.forEach(e => {
    //   if(e.tematica===this.tematica){
    //     this.resultado.push(e);
    //   }
    // });

    this.resultado = this.memoriaResultado.filter(r=>r.tematica===this.tematica);
  }

}
