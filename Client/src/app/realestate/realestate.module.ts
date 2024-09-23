import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForsaleComponent } from './pages/forsale/forsale.component';
import { RentComponent } from './pages/rent/rent.component';
import { PublishComponent } from './pages/publish/publish.component';


@NgModule({
  declarations: [
    ForsaleComponent,
    RentComponent,
    PublishComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class RealestateModule { }
