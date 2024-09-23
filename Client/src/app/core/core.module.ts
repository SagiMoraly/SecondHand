import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealestateModule } from '../realestate/realestate.module';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../user/user.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { CoreComponent } from './pages/core/core.component';



@NgModule({
  declarations: [
    NavBarComponent,
    HomeComponent,
    CoreComponent
  ],
  imports: [
    CommonModule,
    RealestateModule,
    RealestateModule,
    SharedModule,
    UserModule
  ],
  exports: [
    SharedModule,
    CoreComponent
  ]
})
export class CoreModule { }
