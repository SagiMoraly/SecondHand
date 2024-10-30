import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-estate-stage4',
  templateUrl: './estate-stage4.component.html',
  styleUrl: './estate-stage4.component.scss'
})
export class EstateStage4Component implements OnInit{
  @Input() show!: boolean
  @Input() data: undefined | {type:number}
  @Output() formCompleted = new EventEmitter<{type:number}>()

  pricePerMeter = ''
  nowValue = false
  flexValue = false

  disableDate = false
  constructor(
    private fb : FormBuilder
  ){}
  form!: FormGroup
  ngOnInit(): void {
    this.form = this.fb.group({
      squareBuild:[],
      squareMeter:[],
      price:[],
      dateOfEntering:[]
    })
  }

  onSubmit(){
    console.log(this.form.valid)
    console.log(this.form.value)

    if(this.form.valid)
      this.formCompleted.emit(this.form.value)
  }

  disableOrEnableDate(bool: Boolean){
    if(bool)
      this.form.get('dateOfEntering')?.disable();
    else  
      this.form.get('dateOfEntering')?.enable();
    this.form.get('dateOfEntering')?.setValue(new Date(Date.now()).toISOString().slice(0, 10))
  }

  checkBoxClicked(e: any){
    if(e.target.name == "now"){
      this.nowValue =  e.target.checked
      this.disableOrEnableDate(true)
      this.flexValue = false
    }
    if(e.target.name == "flex"){
      this.flexValue = e.target.checked
      this.disableOrEnableDate(true)
      this.nowValue = false
    }
    if(this.flexValue == false && this.nowValue == false)
      this.disableOrEnableDate(false)
  }
}