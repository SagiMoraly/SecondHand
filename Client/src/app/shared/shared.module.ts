import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSliderModule,
    MatDialogModule
  ],
  exports: [
    RouterModule, 
    FormsModule, 
    ReactiveFormsModule, 
    NgxSliderModule,
    MatDialogModule
  ],
})
export class SharedModule {}
