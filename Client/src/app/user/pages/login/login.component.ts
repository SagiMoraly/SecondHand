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
  ngOnInit(): void {
    // this.fb.group({email:["",]}).addControl("Email", this.fb.control(""))
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
