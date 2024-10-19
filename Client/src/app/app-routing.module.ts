import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/pages/core/core.component';
import { HomeComponent } from './core/pages/home/home.component';
import { LoginComponent } from './user/pages/login/login.component';
import { SignupComponent } from './user/pages/signup/signup.component';
import { RealestateModule } from './realestate/realestate.module';
import { FavoriteComponent } from './user/pages/favorite/favorite.component';
import { PublishComponent } from './realestate/pages/publish/publish.component';
import { ForsaleComponent } from './realestate/pages/forsale/forsale.component';
import { RentComponent } from './realestate/pages/rent/rent.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { RealestateDetailComponent } from './realestate/pages/realestate-detail/realestate-detail.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'publish',
    component: PublishComponent,
  },
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'favorites',
        component: FavoriteComponent,
      },
      {
        path: 'realestate',
        children: [
          {
            path: 'forsale',
            component: ForsaleComponent,
          },
          {
            path: 'rent',
            component: RentComponent,
          },
          {
            path: ':id',
            component: RealestateDetailComponent,
          },
          {
            path: '',
            redirectTo: 'forsale',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: '*',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
