import {MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
 
  imports: [MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatCheckboxModule],
  exports: [MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatCheckboxModule] 
 
})
export class MaterialModule { }