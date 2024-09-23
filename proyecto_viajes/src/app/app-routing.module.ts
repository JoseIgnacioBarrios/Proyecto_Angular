import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisreservasComponent } from './controller/misreservas/misreservas.component';
import { ReservaComponent } from './controller/reserva/reserva.component';
import { AccesoComponent } from './controller/acceso/acceso.component';

const routes: Routes = [
  {
    path:"acceso",
    component:AccesoComponent
  },
  {
    path:"reserva",
    component:ReservaComponent
  },
  {
    path:"misreservas",
    component:MisreservasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
