import { HttpClient } from '@angular/common/http';
import { DestroyRef, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { MainAPIService } from './main-api.service';
import { IUser } from '../interfaces/IUser';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class UserAPIService implements OnInit {
readonly USER_API_URL = "https://localhost:7155/api/User/"
private _user =  new BehaviorSubject<IUser | null>(null)

  constructor(
    private http:HttpClient,
    private mainAPI: MainAPIService,
    private destroyRef: DestroyRef
  ) {
    this.getUser().then(
      u => this.user = u
    )
   }

  ngOnInit(): void {
    this.mainAPI.token.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(
      token =>{
         if(token)
          this.getUser().then(
            u => this.user = u
          ).catch(
            _ => this.mainAPI.logoutUser()
          )
          else
            this.user = null
        }
    )
  }

  get user():BehaviorSubject<IUser | null>{
    return this._user
  }

  set user(user: IUser | null){
    this._user.next(user)
  }

  async loginUser(body:{}){
    return firstValueFrom(this.http.post(this.USER_API_URL + "login", body)).then(
      tokenObj => this.mainAPI.setToken(String((tokenObj as any).token))
    )
  }

  async signupUser(body:{}){
    return firstValueFrom(this.http.post(this.USER_API_URL, body))
  }

  async isEmailExist(email: string){
    return firstValueFrom(this.http.get(this.USER_API_URL + email))
  }

  async getUser(){
    return firstValueFrom(this.http.get<IUser>(this.USER_API_URL))
  }
}
