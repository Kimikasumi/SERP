import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './components/RRHH/cards/cards.component'
import { ListarComponent } from './components/Produccion/Producto/listar/listar.component';
import { AgregarComponent } from './components/Produccion/Producto/agregar/agregar.component';
import { EditarComponent } from './components/Produccion/Producto/editar/editar.component';
import { NavBarComponent } from './components/Produccion/nav-bar/nav-bar.component';
import { PrincipalProduccionComponent } from './components/Produccion/principal-producto/principal-produccion.component';
import { ListarMPComponent } from './components/Produccion/MateriaPrima/listar-mp/listar-mp.component';
import { AgregarMPComponent } from './components/Produccion/MateriaPrima/agregar-mp/agregar-mp.component';
import { PrincipalMPComponent } from './components/Produccion/principal-mp/principal-mp.component';
import { FormFuncionarioComponent } from './components/RRHH/form-funcionario/form-funcionario.component'
import { PrincipalRrhhComponent } from './components/RRHH/principal-rrhh/principal-rrhh.component'
import { DashboardRrhhComponent } from './components/RRHH/dashboard-rrhh/dashboard-rrhh.component';
import { LoginComponent } from './components/login/login.component';
import { DashBoardProdComponent } from './components/Produccion/dash-board-prod/dash-board-prod.component'
import { PrincipalPvComponent } from './components/PV/principal-pv/principal-pv.component';
import { ListarPvComponent } from './components/PV/listar-pv/listar-pv.component';
import { AddPvComponent } from './components/PV/add-pv/add-pv.component';
import { DashboardPvComponent } from './components/PV/dashboard-pv/dashboard-pv.component';
import { SolicitarInvPvComponent } from './components/PV/solicitar-inv-pv/solicitar-inv-pv.component';
import { ListarInvPvComponent } from './components/PV/listar-inv-pv/listar-inv-pv.component';
import { SucursalesComponent } from './components/PV/sucursales/sucursales.component';

import { AgregarSolicitudComponent } from './components/RRHH/SolicitudPrestamo/agregar-solicitud/agregar-solicitud.component';
import { ListarSolicitudComponent } from './components/RRHH/SolicitudPrestamo/listar-solicitud/listar-solicitud.component';

import { AgregarSolicitudPComponent } from './components/Produccion/SolicitudP/agregar-solicitud-p/agregar-solicitud-p.component';
import { ListarSolicitudPComponent } from './components/Produccion/SolicitudP/listar-solicitud-p/listar-solicitud-p.component';
import {ListarSRecibidasComponent} from './components/Produccion/SolicitudP/listar-srecibidas/listar-srecibidas.component';

import { PrincipalFinanzasComponent } from './components/Finanzas/principal-finanzas/principal-finanzas.component'
import { ListarFinanzasComponent } from './components/Finanzas/listar-finanzas/listar-finanzas.component'
import { AddPresupuestoComponent } from './components/Finanzas/add-finanzas/add-finanzas.component'
import { EditFinanzasComponent } from './components/Finanzas/edit-finanzas/edit-finanzas.component'
import { DashboardFinanzasComponent } from './components/Finanzas/dashboard-finanzas/dashboard-finanzas.component';
import {DashboardsGerenteComponent} from './components/Gerente/dashboards-gerente/dashboards-gerente.component';

const routes: Routes = [
{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
{
  path: 'login',
  component: LoginComponent
},
{
  path:'gerente',
  component:DashboardsGerenteComponent
},

{path: 'workers',
children:[
  {path: 'agregar', component: FormFuncionarioComponent},
  {path: 'listado', component: PrincipalRrhhComponent},
  {path: 'dashboard', component: DashboardRrhhComponent},
  {path: 'editar/:cedula', component: FormFuncionarioComponent},
  {path: 'crearSolicitud', component: AgregarSolicitudComponent},
  {path: 'listarSolicitud', component: ListarSolicitudComponent}
]},
{path: 'produccion', 
children:[
  {path: 'listar', component: ListarComponent},
  {path: 'agregar', component: AgregarComponent},
  {path: 'principal', component: PrincipalProduccionComponent},
  {path: 'editar/:id', component: AgregarComponent},

  {path: 'listarMP', component: ListarMPComponent},
  {path: 'agregarMP', component: AgregarMPComponent},
  {path: 'principalMP', component: PrincipalMPComponent},
  {path: 'editarMP/:id', component: AgregarMPComponent},
  
  {path: 'agregarSolicitudP', component: AgregarSolicitudPComponent},
  {path: 'listarSolicitudP', component: ListarSolicitudPComponent},
  {path: 'editarSolicitudP/:id', component: AgregarMPComponent},
  {path: 'listarSRecibidas', component: ListarSRecibidasComponent },

      { path: 'listarMP', component: ListarMPComponent },
      { path: 'agregarMP', component: AgregarMPComponent },
      { path: 'principalMP', component: PrincipalMPComponent },
      { path: 'editarMP/:id', component: AgregarMPComponent }, 
      { path: 'dashboard',component: DashBoardProdComponent},
      {path: 'agregarSolicitudP', component: AgregarSolicitudPComponent},
      {path: 'listarSolicitudP', component: ListarSolicitudPComponent},
      {path: 'editarSolicitudP/:id', component: AgregarMPComponent}
    ]
  },
  {
    path: 'retail',
    children: [
      { path: 'principal', component: PrincipalPvComponent },
      { path: 'listadoPV', component: ListarPvComponent },
      { path: 'listadoInvPv', component: ListarInvPvComponent},
      { path: 'sucursales/:cod_producto', component: SucursalesComponent},
      { path: 'agregarPV', component: AddPvComponent },
      { path: 'editPV/:cod_sucursal', component: AddPvComponent },
      { path: 'dashboard', component: DashboardPvComponent },
      { path: 'solicitar', component: SolicitarInvPvComponent }
    ]
  },
  {
    path: 'presupuesto',
    children: [
      { path: 'principal', component: PrincipalFinanzasComponent },
      { path: 'listadoP', component: ListarFinanzasComponent },
      { path: 'createP', component: AddPresupuestoComponent },
      { path: 'updateP/:cod_solicitud_presupuesto', component: EditFinanzasComponent },
      { path: 'dashboard', component: DashboardFinanzasComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
