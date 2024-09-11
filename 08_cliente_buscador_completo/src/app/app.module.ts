import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BuscadorComponent } from './controller/buscador/buscador.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { AltaComponent } from './controller/alta/alta.component';
import { MenuComponent } from './controller/menu/menu.component';
import { BuscarPorUrlComponent } from './controller/buscar-por-url/buscar-por-url.component';

@NgModule({
  declarations: [
    AltaComponent,
    BuscadorComponent,
    MenuComponent,
    BuscarPorUrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  //incluimos el proveedor de httpClient
  providers: [provideHttpClient()],
  bootstrap: [MenuComponent]
})
export class AppModule { }
