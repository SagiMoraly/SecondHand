import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estate-stage7',
  templateUrl: './estate-stage7.component.html',
  styleUrl: './estate-stage7.component.scss'
})
export class EstateStage7Component implements OnInit{
  @Input() show!: boolean
  @Input() data: undefined | {type:number}
  @Output() formCompleted = new EventEmitter<{type:number}>()

  constructor(
    private fb : FormBuilder
  ){}
  form!: FormGroup
  ngOnInit(): void {
    this.form = this.fb.group({
      packageType: ['',Validators.required]
    })
  }
  
  set packageType(val: string){
    this.form.controls['packageType'].setValue(val)
  }

  onSubmit(){
    console.log(this.form.valid)
    console.log(this.form.value)

    if(this.form.valid)
      this.formCompleted.emit(this.form.value)
  }
}