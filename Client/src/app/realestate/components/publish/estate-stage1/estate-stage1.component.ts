import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estate-stage1',
  templateUrl: './estate-stage1.component.html',
  styleUrl: './estate-stage1.component.scss'
})
export class EstateStage1Component implements OnInit{
  @Input() show!: boolean
  @Input() data: undefined | {type:number}
  @Output() formCompleted = new EventEmitter<{type:number}>()

  constructor(
    private fb : FormBuilder
  ){}
  form!: FormGroup
  ngOnInit(): void {
    this.form = this.fb.group({
      type: [this.data?.type ,Validators.required]
    })
  }

  myType(type : number){
    return this.form.controls['type'].value === type
  }

  setType(type : number) {
      this.form.controls['type'].setValue(type)
  }

  onSubmit(){
    console.log(this.form.valid)
    console.log(this.form.value)

    if(this.form.valid)
      this.formCompleted.emit(this.form.value)
  }
}
