import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './components/RRHH/cards/cards.component'

const routes: Routes = [
{
  path: '',
  redirectTo: '/workers',
  pathMatch: 'full'
},
{
  path: 'workers',
  component: CardsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
