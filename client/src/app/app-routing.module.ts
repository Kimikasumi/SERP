import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './components/RRHH/cards/cards.component'
import { ListarComponent } from './components/Producto/listar/listar.component';
import { AgregarComponent } from './components/Producto/agregar/agregar.component';
import { EditarComponent } from './components/Producto/editar/editar.component';
import { NavBarComponent } from './components/Producto/nav-bar/nav-bar.component';
import { PrincipalProduccionComponent } from './components/Producto/principal-produccion/principal-produccion.component';

const routes: Routes = [
{
  path: '',
  redirectTo: '/produccion',
  pathMatch: 'full'
},
{path: 'workers',component: CardsComponent},
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
