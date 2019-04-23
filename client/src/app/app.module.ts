import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { CardsComponent } from './components/RRHH/cards/cards.component';
import { FuncionariosService } from './services/funcionarios.service';
import { SidebarComponentRRHH } from '../app/components/RRHH/sidebar/sidebar.component';
import { ListarComponent } from './components/Produccion/Producto/listar/listar.component';
import { AgregarComponent } from './components/Produccion/Producto/agregar/agregar.component';
import { EditarComponent } from './components/Produccion/Producto/editar/editar.component';
import { NavBarComponent } from './components/Produccion/nav-bar/nav-bar.component';
import { PrincipalProduccionComponent } from './components/Produccion/principal-producto/principal-produccion.component';
import { FormsModule } from '@angular/forms';
import { AgregarMPComponent } from './components/Produccion/MateriaPrima/agregar-mp/agregar-mp.component';
import { EditarMPComponent } from './components/Produccion/MateriaPrima/editar-mp/editar-mp.component';
import { ListarMPComponent } from './components/Produccion/MateriaPrima/listar-mp/listar-mp.component';
import { PrincipalMPComponent } from './components/Produccion/principal-mp/principal-mp.component';
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    SidebarComponentRRHH,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    NavBarComponent,
    PrincipalProduccionComponent,
    AgregarMPComponent,
    EditarMPComponent,
    ListarMPComponent,
    PrincipalMPComponent
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
