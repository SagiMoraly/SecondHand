import { AfterViewInit, Component, DestroyRef, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { UserAPIService } from '../../../core/services/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit, AfterViewInit {
  constructor(
    private fb: FormBuilder, 
    private destroyRef: DestroyRef,
    private userAPI:UserAPIService, 
    private router: Router
  ) {}
  formStage1!: FormGroup;
  formStage2!: FormGroup;
  showPasswordReq = false;
  submited = false;
  stage = 1
  ngOnInit(): void {
    this.formStage1 = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20),
            Validators.pattern(/(?=.*\d)(?=.*[a-zA-Z])/),
          ],
        ],
        passwordConfirm: ['', [Validators.required]],
      },
      { validators: this.PasswordMatchValidator }
    );

    this.formStage2 = this.fb.group({
      firstName: ['',[Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10) , Validators.pattern(/^\d+$/)]],
      terms: [false, Validators.requiredTrue],
    })
  }

  ngAfterViewInit(): void {
    // this.passwordConfirm?.addValidators(this.PasswordMatchValidator);
  }

  get email() {
    return this.formStage1.get('email');
  }

  get password() {
    return this.formStage1.get('password');
  }

  get passwordConfirm() {
    return this.formStage1.get('passwordConfirm');
  }

  get firstName() {
    return this.formStage1.get('firstName');
  }

  get lastName() {
    return this.formStage1.get('lastName');
  }

  get phoneNumber() {
    return this.formStage1.get('phoneNumber');
  }

  get terms() {
    return this.formStage1.get('terms');
  }

  resetSubmited() {
    this.submited = false;
  }

  PasswordMatchValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = control.get('password');
    const passwordConfirm = control.get('passwordConfirm');

    // console.log(this.form.get('password'), this.form.get('passwordConfirm'));

    if (password?.value !== passwordConfirm?.value) {
      return { passwordMatchError: true };
    }
    return null;
  };

  onSubmit() {
    this.submited = true;

    this.formStage1.updateValueAndValidity();

    console.log(this.formStage1);

    console.log(this.formStage1.valid);
    this.stage = 2
    console.log(this.stage);
    
  }

  async onSubmitStage1() {
    this.submited = true;

    console.log(this.formStage1.valid);
    
    if(this.formStage1.valid){
      this.userAPI.isEmailExist(String(this.email?.value)).then(_=>{
        this.stage = 2
        this.submited = false
      }).catch(
        _ => console.log("fail")
      )
    }    
  }

  
  async onSubmitStage2() {
    this.submited = true;
    if(this.formStage2.valid){
      this.userAPI.signupUser({...this.formStage2.value , ...this.formStage1.value}).then(
        a=>{
          this.router.navigate(["login"])
          console.log(a)
        }
      )
    }
  }
}
