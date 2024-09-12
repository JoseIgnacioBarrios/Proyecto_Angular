export class Resultado{
  url:string;
  descripcion:string;
  tematica:string
  //? es un campo opcional
  constructor(url?:string,tematica?:string,description?:string){
    this.url=url;
    this.tematica=tematica;
    this.descripcion=description;
  }
}
