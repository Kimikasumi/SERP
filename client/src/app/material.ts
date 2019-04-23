import {MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatCheckboxModule,MatSliderModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
 
  imports: [MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatCheckboxModule,MatSliderModule],
  exports: [MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatCheckboxModule,MatSliderModule] 
 
})
export class MaterialModule { }