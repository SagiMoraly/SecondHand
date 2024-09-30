import { AfterViewInit, Component, DestroyRef, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent  implements OnInit ,AfterViewInit{
  constructor(private fb: FormBuilder, private destroyRef: DestroyRef) {}
  form!: FormGroup;
  showPasswordReq = false
  submited = false
  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8),Validators.maxLength(20),Validators.pattern(/(?=.*\d)(?=.*[a-zA-Z])/)]],
      passwordConfirm: ['', [Validators.required]]
    });
  }

  ngAfterViewInit(): void {
    this.passwordConfirm?.addValidators(this.PasswordMatchValidator)
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get passwordConfirm() {
    return this.form.get('passwordConfirm')
  }

  resetSubmited(){  
    this.submited = false
  }

  PasswordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    if (this.password?.value !== this.passwordConfirm?.value) {
      return { passwordMatchError: true };
    }
    return null;
  };

  onSubmit() {
    this.submited = true
    console.log(this.form);

    console.log(this.form.value);
  }

}
