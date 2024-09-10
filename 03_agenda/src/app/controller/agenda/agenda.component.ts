import { Component } from '@angular/core';
import { Contacto } from '../../model/Contacto';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  //almacena los contactos creados y inicializado como array
  agenda:Contacto[]=[];
  //variables vinculadas con los campos de texto de la vista
  nombre:string;
  edad:number;
  telefono:string;

  //respuesta
  guardar():void{
    this.agenda.push(new Contacto(this.nombre ,this.edad,this.telefono))

  }
}
