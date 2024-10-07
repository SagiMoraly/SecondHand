import { Component, DestroyRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAPIService } from '../../../core/services/user-api.service';
import { MainAPIService } from '../../../core/services/main-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder, 
    private destroyRef: DestroyRef,
    private userAPI: UserAPIService,
    private router: Router
    // private mainAPI: MainAPIService
  ) {}
  form!: FormGroup;
  submited = false
  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  resetSubmited(){  
    this.submited = false
  }

  onSubmit() {
    this.submited = true
    console.log(this.email?.errors);
    console.log(this.form.value);
    if(this.form.valid)
      this.userAPI.loginUser(this.form.value).then(
        tokenObj => this.router.navigate([""])
      )
  }

}
