import { ReservaComponent } from './../reserva/reserva.component';
import { AUTENTIFICAR } from '../../custom_properties';
import { Cliente } from '../../model/Cliente';
import { ClientesService } from './../../service/clientes.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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


  constructor(private clienteService:ClientesService,private router: Router){

  }

  autentificar(){
    this.clienteService.validacion(this.usuario,this.contrasena).subscribe(data => this.autenticado=data);
    if(this.autenticado=="true"){
      this.clienteService.buscarUsuario(this.usuario).subscribe(data=>this.cliente=data);
      AUTENTIFICAR.ok=true;
      AUTENTIFICAR.usuario=this.cliente.usuario;
      this.router.navigate(["/reserva"]);
    }
    else{
      alert("Usuario no encontrado");
    }
  }

  registrarpag(){
    this.clienteService.save(this.newCliente);
    this.router.navigate(["/acceso"]);
    alert("Usuario Creado")
  }

  newUser(){
    this.clienteService.save(this.newCliente);
  }

}
