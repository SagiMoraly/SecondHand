import { Component, DestroyRef, OnInit } from '@angular/core';
import { MainAPIService } from '../../services/main-api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserAPIService } from '../../services/user-api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit{
  isLogedIn = false
  userInitials = ""
  constructor(
    private mainAPI: MainAPIService, 
    private destroyRef: DestroyRef,
    private userAPI: UserAPIService
  ) {}
  ngOnInit(): void {
    this.mainAPI.token.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(token =>{
      if(token){
        console.log(this.userAPI.user);
        this.userAPI.user.pipe(
          takeUntilDestroyed(this.destroyRef)
        ).subscribe(
          u => {
            if(u){
              this.userInitials = (u?.firstName.charAt(0) + u?.lastName.charAt(0)).toUpperCase()
              this.isLogedIn = true
            }
            else
              this.isLogedIn = false
            }
          )
        }
      else
        this.isLogedIn = false
    }
    )
  }
  
  logMeOut(){
    this.mainAPI.logoutUser()
  }
}
