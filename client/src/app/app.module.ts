    
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
import { SucursalesComponent } from './components/PV/sucursales/sucursales.component';


import { AgregarSolicitudComponent } from './components/RRHH/SolicitudPrestamo/agregar-solicitud/agregar-solicitud.component';
import { ListarSolicitudComponent } from './components/RRHH/SolicitudPrestamo/listar-solicitud/listar-solicitud.component';

import { AgregarSolicitudPComponent } from './components/Produccion/SolicitudP/agregar-solicitud-p/agregar-solicitud-p.component';
import { ListarSolicitudPComponent } from './components/Produccion/SolicitudP/listar-solicitud-p/listar-solicitud-p.component';
import { PrincipalSolicitudPComponent } from './components/Produccion/principal-solicitud-p/principal-solicitud-p.component';
import { AbsentismoComponent } from '../app/components/RRHH/absentismo/absentismo.component';

import { PrincipalFinanzasComponent } from './components/Finanzas/principal-finanzas/principal-finanzas.component'
import { ListarFinanzasComponent } from './components/Finanzas/listar-finanzas/listar-finanzas.component'
import { AddPresupuestoComponent } from './components/Finanzas/add-finanzas/add-finanzas.component'
import { EditFinanzasComponent } from './components/Finanzas/edit-finanzas/edit-finanzas.component'
import { NavbarFinanzasComponent } from './components/Finanzas/navbar-finanzas/navbar-finanzas.component'

import { MatDialogModule } from '@angular/material';


import {MatCardModule} from '@angular/material/card'; 
import { PromProd } from './components/Produccion/prom-productos/prom-prod.component'
import { MpAnio } from './components/Produccion/mp-anio/mp-anio.component'
import { MayorProd } from './components/Produccion/mayor-prod/mayor-prod.component'
import { PlazoProd } from './components/Produccion/plazo-prod/plazo-prod.component'
import { ChartsModule} from 'ng2-charts';
import { FporArea } from './components/RRHH/FporArea/FporArea.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d';

import { AmexioWidgetModule } from "amexio-ng-extensions"; // Import Amexio library
//Dashboard,Charts & Maps are available as seperate module (not in AmexioWidgetModule)
import {
  AmexioChartsModule,
  AmexioDashBoardModule,
  AmexioEnterpriseModule,
  AmexioMapModule
} from "amexio-ng-extensions";

import { DashBoardProdComponent } from './components/Produccion/dash-board-prod/dash-board-prod.component';
import { ListarSRecibidasComponent } from './components/Produccion/SolicitudP/listar-srecibidas/listar-srecibidas.component';



import { NgxGaugeModule } from 'ngx-gauge';
import { AlcanceOComponent } from '../app/components/RRHH/alcance-o/alcance-o.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SolicitudesFinanzasComponent } from './components/Finanzas/solicitudes-finanzas/solicitudes-finanzas.component';
import { DashboardFinanzasComponent } from './components/Finanzas/dashboard-finanzas/dashboard-finanzas.component';
import { PresupuestoAreasFinanzasComponent } from './components/Finanzas/presupuesto-areas-finanzas/presupuesto-areas-finanzas.component';
import { PresupuestoTotalFinanzasComponent } from './components/Finanzas/presupuesto-total-finanzas/presupuesto-total-finanzas.component';
import { DashboardsGerenteComponent } from './components/Gerente/dashboards-gerente/dashboards-gerente.component';
import { CantidadSucursalPvComponent } from './components/PV/cantidad-sucursal-pv/cantidad-sucursal-pv.component';
import { ValorSucursalPvComponent } from './components/PV/valor-sucursal-pv/valor-sucursal-pv.component';
import { ValorCiudadPvComponent } from './components/PV/valor-ciudad-pv/valor-ciudad-pv.component';
FusionChartsModule.fcRoot(FusionCharts, Column2D);


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
    AbsentismoComponent,
    AgregarSolicitudComponent,
    ListarSolicitudComponent,
    AgregarSolicitudPComponent,
    ListarSolicitudPComponent,
    PrincipalSolicitudPComponent,
    FporArea,
    PromProd,
    PlazoProd,
    MpAnio,
    MayorProd,
    AlcanceOComponent,
    NavbarPvComponent,
    PrincipalPvComponent,
    ListarPvComponent,
    AddPvComponent,
    EditPvComponent,
    DashboardPvComponent,
    SolicitarInvPvComponent,
    ListarInvPvComponent,
    SucursalesComponent,
    ListarInvPvComponent,
    AgregarSolicitudPComponent,
    ListarSolicitudPComponent,
    PrincipalSolicitudPComponent,
    DashBoardProdComponent,
    ListarSRecibidasComponent,
    PrincipalSolicitudPComponent,
    PrincipalFinanzasComponent, 
    ListarFinanzasComponent,
    AddPresupuestoComponent,
    EditFinanzasComponent,
    NavbarFinanzasComponent,
    SolicitudesFinanzasComponent,
    DashboardFinanzasComponent,
    PresupuestoAreasFinanzasComponent,
    PresupuestoTotalFinanzasComponent,
    DashboardsGerenteComponent,
    CantidadSucursalPvComponent,
    ValorSucursalPvComponent,
    ValorCiudadPvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    AmexioWidgetModule,
    FormsModule,
    AmexioChartsModule,
    AmexioDashBoardModule,
    AmexioEnterpriseModule,
    AmexioMapModule,
    MatCardModule,
    NgxGaugeModule,
    NgxPaginationModule,
    RecaptchaModule.forRoot()
  ],
  providers: [FuncionariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }