import { Component } from '@angular/core';
import { HotelService } from '../../service/hotel.service';
import { Hotel } from '../../model/Hotel';
import { Vuelo } from '../../model/Vuelo';
import { VueloService } from '../../service/vuelo.service';
import { ReservaService } from '../../service/reserva.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})
export class ReservaComponent {

  opDestino:string="-";
  listaDestino:string[];

  opHotel:string="-";
  listaHotel:Hotel[];

  oppersonas:string="-";
  //no funciona si esta vacio por querealizamos un push
  npersonas:string[]=[];

  opvuleos:string
  lvuelos:Vuelo[];

  constructor(private hotelService:HotelService, private vueloService:VueloService,private reservaServicio:ReservaService, private menu:MenuComponent){
    this.buscarDestino();
    this.personascantidad();
  }

  buscarDestino():void{
    console.log("entro en vuscar destino")
    this.hotelService.buscarDestino().subscribe(data=>this.listaDestino=data);

  }
  buscarhotel():void{
    console.log("entro en vuscar buscarhotel")
    this.hotelService.buscarPorDestino(this.opDestino).subscribe(data=>this.listaHotel=data)
    console.log(this.listaHotel)
    //this.buscarVuelo();
  }

  personascantidad():void{
    for (let i = 0; i < 20; i++) {
      this.npersonas.push(i.toString());
    }

  }

  buscarVuelo():void{
    console.log("entro en buscar vuelo ANTES DE IF")
    if(this.opDestino!= "-" && this.opHotel!="-" && this.oppersonas!="-" ){
      console.log("entro en buscar vuelo")
      this.vueloService.vuelosDisponible(this.opDestino, this.oppersonas).subscribe(data=>this.lvuelos=data)
    }
  }

  crearReserva():void{

    this.reservaServicio.crear( this.menu.menu_usuario.usuario,parseInt(this.opHotel,10),parseInt(this.opvuleos,10)).subscribe(data =>{
      if(data=="true"){
        alert("reserva realizada");
      }else{
        alert("Error ");
      }

    } );
  }


}
