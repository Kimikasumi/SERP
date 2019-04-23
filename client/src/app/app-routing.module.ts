import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './components/RRHH/cards/cards.component'
import { ListarComponent } from './components/Producto/listar/listar.component';
import { AgregarComponent } from './components/Producto/agregar/agregar.component';
import { FormFuncionarioComponent} from './components/RRHH/form-funcionario/form-funcionario.component'
import { PrincipalProduccionComponent } from './components/Producto/principal-produccion/principal-produccion.component';
import {PrincipalRrhhComponent} from './components/RRHH/principal-rrhh/principal-rrhh.component'
import { DashboardRrhhComponent } from './components/RRHH/dashboard-rrhh/dashboard-rrhh.component';
const routes: Routes = [
{
  path: '',
  redirectTo: '/produccion',
  pathMatch: 'full'
},
{path: 'workers',
children:[
  {path: 'agregar', component: FormFuncionarioComponent},
  {path: 'listado', component: PrincipalRrhhComponent},
  {path: 'dashboard', component: DashboardRrhhComponent},
  {path: 'editar/:cod_funcionario', component: FormFuncionarioComponent}
]},
{path: 'produccion', 
children:[
  {path: 'listar', component: ListarComponent},
  {path: 'agregar', component: AgregarComponent},
  {path: 'principal', component: PrincipalProduccionComponent}
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
