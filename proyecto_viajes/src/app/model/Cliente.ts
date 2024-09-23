export class Cliente{
  usuario:string;
  password:string;
  direccion:string;
  tarjeta:string;
  dni:string;

  constructor(usuario?:string,password?:string,dirrecion?:string,tarjeta?:string,dni?:string){
    this.usuario=usuario;
    this.password=password;
    this.direccion=dirrecion;
    this.tarjeta=tarjeta;
    this.dni=dni;
  }
}
