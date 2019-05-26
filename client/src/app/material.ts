import {MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatCheckboxModule,MatSliderModule, MatDialogModule, MatCardModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
 
  imports: [MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatCheckboxModule,MatSliderModule,MatDialogModule, MatCardModule],
  exports: [MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatCheckboxModule,MatSliderModule,MatDialogModule, MatCardModule] 
 
})
export class MaterialModule { }