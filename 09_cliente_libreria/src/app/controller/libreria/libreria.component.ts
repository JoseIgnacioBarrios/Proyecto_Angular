
import { Component } from '@angular/core';
import { LibreriaService } from '../../service/libreria.service';
import { book } from '../../model/book';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrl: './libreria.component.css'
})
export class LibreriaComponent {

  constructor(private libreiaService:LibreriaService){

  }

  min:number;
  max:number;

  //se mostrara el resultado aqui
  books:book[]=[];

  buscar():void{
    this.libreiaService.librosPorPrecio(this.min,this.max).subscribe(data=> this.books=data);
  }

}
