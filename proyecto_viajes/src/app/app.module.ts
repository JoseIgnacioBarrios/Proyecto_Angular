import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './controller/menu/menu.component';
import { AccesoComponent } from './controller/acceso/acceso.component';
import { ReservaComponent } from './controller/reserva/reserva.component';
import { MisreservasComponent } from './controller/misreservas/misreservas.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient  } from '@angular/common/http';

@NgModule({
  declarations: [
    MenuComponent,
    AccesoComponent,
    ReservaComponent,
    MisreservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [provideHttpClient()],
  bootstrap: [MenuComponent]
})
export class AppModule { }
