import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    FavoriteComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
