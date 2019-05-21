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
import { NavbarPvComponent } from './components/PV/navbar-pv/navbar-pv.component';
import { PrincipalPvComponent } from './components/PV/principal-pv/principal-pv.component';
import { ListarPvComponent } from './components/PV/listar-pv/listar-pv.component';
import { AddPvComponent } from './components/PV/add-pv/add-pv.component';
import { EditPvComponent } from './components/PV/edit-pv/edit-pv.component';
import { DashboardPvComponent } from './components/PV/dashboard-pv/dashboard-pv.component';
import { SolicitarInvPvComponent } from './components/PV/solicitar-inv-pv/solicitar-inv-pv.component';
import { ListarInvPvComponent } from './components/PV/listar-inv-pv/listar-inv-pv.component';
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
    NavbarPvComponent,
    PrincipalPvComponent,
    ListarPvComponent,
    AddPvComponent,
    EditPvComponent,
    DashboardPvComponent,
    SolicitarInvPvComponent,
    ListarInvPvComponent
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
