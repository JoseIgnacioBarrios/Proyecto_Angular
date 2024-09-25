import { Reserva } from '../../model/Reserva';
import { ReservaService } from '../../service/reserva.service';
import { MenuComponent } from '../menu/menu.component';
import { HotelService } from './../../service/hotel.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-misreservas',
  templateUrl: './misreservas.component.html',
  styleUrl: './misreservas.component.css'
})
export class MisreservasComponent {
  misreservas:Reserva[]=[];
  usuario:string;

  constructor(private menu:MenuComponent,private misreservasService:ReservaService){
    this.usuario=menu.menu_usuario.usuario;
    this.verMisreservas();
  }

  verMisreservas():void{
    this.misreservasService.reservas(this.usuario).subscribe(data=>this.misreservas=data);
  }




}
