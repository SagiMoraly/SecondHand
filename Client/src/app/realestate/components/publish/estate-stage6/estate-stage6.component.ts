import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estate-stage6',
  templateUrl: './estate-stage6.component.html',
  styleUrl: './estate-stage6.component.scss'
})
export class EstateStage6Component implements OnInit{
  @Input() show!: boolean
  @Input() data: undefined | {type:number}
  @Output() formCompleted = new EventEmitter<{type:number}>()

  agreaToregulations = false

  constructor(
    private fb : FormBuilder
  ){}
  form!: FormGroup
  ngOnInit(): void {
    this.form = this.fb.group({
      contactName: ['',Validators.required],
      contactPhone: ['',Validators.required]
    })
  }

  checkThebox(){
    this.agreaToregulations = !this.agreaToregulations
  }

  onSubmit(){
    console.log(this.form.valid , this.agreaToregulations)
    console.log(this.form.value)

    if(this.form.valid && this.agreaToregulations)
      this.formCompleted.emit(this.form.value)
  }
}
