import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-estate-stage3',
  templateUrl: './estate-stage3.component.html',
  styleUrl: './estate-stage3.component.scss'
})
export class EstateStage3Component implements OnInit{
  @Input() show!: boolean
  @Input() data: undefined | {}
  @Output() formCompleted = new EventEmitter<{type:number}>()

  roomsList = [
    "0","1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5"
  ]
  showerRoomsList = [
    "1", "2", "3", "4+"
  ]
  parkingList = [   
    "ללא","1","2","3"
  ]
  balconyList = [
    "ללא","1","2","3","4"
  ]

  constructor(
    private fb : FormBuilder
  ){}
  form!: FormGroup
  ngOnInit(): void {
    this.form = this.fb.group({
      rooms:[],
      showerRooms:[],
      parking:[],
      balcony:[],
      features:[],
      furnitureDetails:[],
      details:[]
    })
  }

  onSubmit(){
    console.log(this.form.valid)
    console.log(this.form.value)

    if(this.form.valid)
      this.formCompleted.emit(this.form.value)
  }
}
