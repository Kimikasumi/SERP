import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http'
import { RecaptchaModule } from 'ng-recaptcha';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { CardsComponent } from './components/RRHH/cards/cards.component';
import { FuncionariosService } from './services/funcionarios.service';
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
import { PrincipalRrhhComponent } from './components/RRHH/principal-rrhh/principal-rrhh.component';
import { FormFuncionarioComponent} from './components/RRHH/form-funcionario/form-funcionario.component';
import { NavbarRrhhComponent } from './components/RRHH/navbar-rrhh/navbar-rrhh.component';
import { DashboardRrhhComponent } from './components/RRHH/dashboard-rrhh/dashboard-rrhh.component';
import { LoginComponent } from './components/login/login.component';

import { NavbarFinanzasComponent } from './components/Finanzas/navbar-finanzas/navbar-finanzas.component';
import { PrincipalFinanzasComponent } from './components/Finanzas/principal-finanzas/principal-finanzas.component';
import { ListarFinanzasComponent } from './components/Finanzas/listar-finanzas/listar-finanzas.component';
import { AddPresupuestoComponent } from './components/Finanzas/add-finanzas/add-finanzas.component';
import { EditFinanzasComponent } from './components/Finanzas/edit-finanzas/edit-finanzas.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    NavBarComponent,
    PrincipalProduccionComponent,
    AgregarMPComponent,
    EditarMPComponent,
    ListarMPComponent,
    PrincipalMPComponent,
    PrincipalRrhhComponent,
    FormFuncionarioComponent,
    NavbarRrhhComponent,
    DashboardRrhhComponent,
    LoginComponent,
    NavbarFinanzasComponent,
    PrincipalFinanzasComponent,
    ListarFinanzasComponent,
    AddPresupuestoComponent,
    EditFinanzasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule.forRoot()
  ],
  providers: [FuncionariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
