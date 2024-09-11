
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaComponent } from './controller/alta/alta.component';
import { BuscadorComponent } from './controller/buscador/buscador.component';
import { BuscarPorUrlComponent } from './controller/buscar-por-url/buscar-por-url.component';

//aqui colocamos las rutas del html menu
const routes: Routes = [
      {
        path:"buscar",
        component:BuscadorComponent
      },
      {
        path:"nuevo",
        component:AltaComponent
      },
      {
        path:"buscarPorUrl",
        component:BuscarPorUrlComponent
      }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
