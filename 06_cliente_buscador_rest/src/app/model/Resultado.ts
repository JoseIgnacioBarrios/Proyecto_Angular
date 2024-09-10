export class Resultado{
  url:string;
  descripcion:string;
  tematica:string

  constructor(url:string,tematica:string,description:string){
    this.url=url;
    this.descripcion=description;
    this.tematica=tematica;
  }
}
