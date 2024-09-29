import { Component, DestroyRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  constructor(private fb: FormBuilder, private destroyRef:DestroyRef){}
  form!: FormGroup
  ngOnInit(): void {
    // this.fb.group({email:["",]}).addControl("Email", this.fb.control(""))
  }
}
