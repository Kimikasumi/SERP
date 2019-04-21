import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { CardsComponent } from './components/RRHH/cards/cards.component';
import { SidebarComponent } from '../app/components/Producto/sidebar/sidebar.component';
import { FuncionariosService } from './services/funcionarios.service';
import { SidebarComponentRRHH } from '../app/components/RRHH/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    SidebarComponent,
    SidebarComponentRRHH
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
