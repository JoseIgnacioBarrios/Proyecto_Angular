import { Cliente } from '../../model/Cliente';
import { Component  } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
// [x: string]: any;
  //isAutenticado:boolean =AUTENTIFICAR.ok;
  menu_usuario:Cliente;
  autenticado:boolean;
}
