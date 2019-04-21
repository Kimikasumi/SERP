import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { CardsComponent } from './components/RRHH/cards/cards.component';
import { FuncionariosService } from './services/funcionarios.service';
import { SidebarComponentRRHH } from '../app/components/RRHH/sidebar/sidebar.component';
import { ListarComponent } from '../app/components/Producto/listar/listar.component';
import { AgregarComponent } from './components/Producto/agregar/agregar.component';
import { EditarComponent } from './components/Producto/editar/editar.component';
import { NavBarComponent } from './components/Producto/nav-bar/nav-bar.component';
import { PrincipalProduccionComponent } from './components/Producto/principal-produccion/principal-produccion.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    SidebarComponentRRHH,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    NavBarComponent,
    PrincipalProduccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FuncionariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
