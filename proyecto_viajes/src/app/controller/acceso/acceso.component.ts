import { ReservaComponent } from './../reserva/reserva.component';
import { AUTENTIFICAR } from '../../custom_properties';
import { Cliente } from '../../model/Cliente';
import { ClientesService } from './../../service/clientes.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrl: './acceso.component.css'
})
export class AccesoComponent {
  usuario: string = '';
  contrasena: string = '';
  autenticado:String;
  cliente:Cliente=new Cliente();
  isLogin:boolean=true;
  //registrar
  newCliente:Cliente=new Cliente();


  constructor(private clienteService:ClientesService,private router: Router, private menu:MenuComponent){

  }

  autentificar(){
    this.clienteService.validacion(this.usuario,this.contrasena).subscribe(data => {
      if(data=="true"){
        this.clienteService.buscarUsuario(this.usuario).subscribe(data=>this.menu.menu_usuario=data);
        this.menu.autenticado=true;
       // this.menu.menu_usuario= this.cliente.usuario;

        this.router.navigate(["/reserva"]);
      }
      else{
        alert("Usuario no encontrado");
      }
    });

  }

  registrar(){
    this.clienteService.save(this.newCliente);
    this.isLogin=false;
    this.router.navigate(["/acceso"]);

  }

  newUser(){
    var mensaje:String;
    this.clienteService.save(this.newCliente).subscribe(data=>mensaje=data)
    this.isLogin=true;
    if(mensaje){
      alert("Usuario creado");
      this.isLogin=true;
    }else {
      alert("Error usuario no creado");
    }
    this.router.navigate(["/acceso"]);
  }
  accesoIni(){
    this.isLogin=false;
    this.router.navigate(["/acceso"]);
  }

}
