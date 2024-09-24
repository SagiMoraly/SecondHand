import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealestateModule } from '../realestate/realestate.module';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../user/user.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { CoreComponent } from './pages/core/core.component';
import { AdCardComponent } from './components/ad-card/ad-card.component';

@NgModule({
  declarations: [
    NavBarComponent,
    HomeComponent,
    CoreComponent,
    AdCardComponent,
  ],
  imports: [
    CommonModule,
    RealestateModule,
    RealestateModule,
    SharedModule,
    UserModule,
  ],
  exports: [SharedModule, CoreComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {}
