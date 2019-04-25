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

import { PrincipalPvComponent } from './components/PV/principal-pv/principal-pv.component';
import { ListarPvComponent } from './components/PV/listar-pv/listar-pv.component';
import { AddPvComponent } from './components/PV/add-pv/add-pv.component';

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
    path: 'workers',
    children: [
      { path: 'agregar', component: FormFuncionarioComponent },
      { path: 'listado', component: PrincipalRrhhComponent },
      { path: 'dashboard', component: DashboardRrhhComponent },
      { path: 'editar/:cod_funcionario', component: FormFuncionarioComponent }
    ]
  },
  {
    path: 'produccion',
    children: [
      { path: 'listar', component: ListarComponent },
      { path: 'agregar', component: AgregarComponent },
      { path: 'principal', component: PrincipalProduccionComponent },
      { path: 'editar/:id', component: AgregarComponent },

      { path: 'listarMP', component: ListarMPComponent },
      { path: 'agregarMP', component: AgregarMPComponent },
      { path: 'principalMP', component: PrincipalMPComponent },
      { path: 'editarMP/:id', component: AgregarMPComponent }
    ]
  },
  {
    path: 'retail',
    children: [
      { path: 'principal', component: PrincipalPvComponent },
      { path: 'listadoPV', component: ListarPvComponent},
      { path: 'agregarPV', component: AddPvComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
