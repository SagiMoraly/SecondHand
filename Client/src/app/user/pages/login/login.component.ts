import { Component, DestroyRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private destroyRef: DestroyRef) {}
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
  }

}
