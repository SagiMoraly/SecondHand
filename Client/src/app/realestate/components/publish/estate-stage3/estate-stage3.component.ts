import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estate-stage3',
  templateUrl: './estate-stage3.component.html',
  styleUrl: './estate-stage3.component.scss',
})
export class EstateStage3Component implements OnInit {
  @Input() show!: boolean;
  @Input() data: undefined | {};
  @Output() formCompleted = new EventEmitter<{ type: number }>();

  roomsList = [
    '0',
    '1',
    '1.5',
    '2',
    '2.5',
    '3',
    '3.5',
    '4',
    '4.5',
    '5',
    '5.5',
    '6',
    '6.5',
    '7',
    '7.5',
    '8',
    '8.5',
    '9',
    '9.5',
    '10',
    '10.5',
    '11',
    '11.5',
    '12',
    '12.5',
  ];
  showerRoomsList = ['1', '2', '3', '4+'];
  parkingList = ['ללא', '1', '2', '3'];
  balconyList = ['ללא', '1', '2', '3', '4'];

  furnitureDetailsMaxLength = 200;
  furnitureDetailsValue = '';
  detailsMaxLength = 400;
  detailsValue = '';

  constructor(private fb: FormBuilder) {}
  form!: FormGroup;
  showFurnitureDetail = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      rooms: ['',Validators.required],
      showerRooms: ['',Validators.required],
      parking: ['',Validators.required],
      balcony: ['',Validators.required],
      propertyFeature: [[],Validators.required],
      furnitureDetails: [''],
      details: ['',Validators.required],
    });
  }

  setFurnitureDetail(value: boolean) {
    this.showFurnitureDetail = value;
  }

  onSubmit() {
    console.log(this.form.valid);
    console.log(this.form.value);

    if (this.form.valid) this.formCompleted.emit(this.form.value);
  }
}
