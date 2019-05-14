import {MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatCheckboxModule,MatSliderModule, MatDialogModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
 
  imports: [MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatCheckboxModule,MatSliderModule,MatDialogModule],
  exports: [MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatCheckboxModule,MatSliderModule,MatDialogModule] 
 
})
export class MaterialModule { }