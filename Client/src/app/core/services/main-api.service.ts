import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainAPIService {
  private _token!: BehaviorSubject<string | null>

  constructor() { 
    let tokenFromLocalStorage = localStorage.getItem("token")
    tokenFromLocalStorage = tokenFromLocalStorage ? tokenFromLocalStorage : null  
    this._token = new BehaviorSubject<string | null>(tokenFromLocalStorage)
  }

  get token():BehaviorSubject<string | null>{
    return this._token
  }

  set token(token: string | null){
    this._token.next(token)
  }

  setToken(token: string){
    localStorage.setItem("token" ,token)
    this.token = token
  }

  logoutUser(){
    localStorage.removeItem("token")
    this.token = null

  }
}
