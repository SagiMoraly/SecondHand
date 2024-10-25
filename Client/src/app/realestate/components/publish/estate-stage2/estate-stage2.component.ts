import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estate-stage2',
  templateUrl: './estate-stage2.component.html',
  styleUrl: './estate-stage2.component.scss'
})
export class EstateStage2Component implements OnInit{
  @Input() show!: boolean
  @Input() data: 
  undefined | {
    city:string
    street: string
    streetNumber: number
    floor: number
    floorTotal: number
    type: string
    condition: string
    airWays: string
    openView: string
    rearAsset: boolean
  }
  @Output() formCompleted = new EventEmitter<{type:number}>()

  propertyTypeList = [
   `דירה`,
   `דירת גן`,
   `בית פרטי/ קוטג'`,
   `גג/פנטהאוז`,
   `מגרשים`,
   `דופלקס`,
   `דירת נופש`,
   `דו משפחתי`,
   `מרתף/ פרטר`,
   `טריפלקס`,
   `יחידת דיור`,
   `משק חקלאי/ נחלה`,
   `משק עזר`,
   `דיור מוגן`,
   `בניין מגורים (את הבניין כולו)`,
   `סטודיו/ לופט`,
   `מחסן`,
   `חניה`,
   `קב' רכישה/ זכות לנכס`,
   `כללי`,
  ]
  stateList = [
    "חדש מקבלן (לא גרו בו בכלל)",
 		"חדש (נכס בן עד 10 שנים)",
 		"משופץ (שופץ ב5 השנים האחרונות)",
 		"במצב שמור (במצב טוב, לא שופץ)",
 		"דרוש שיפוץ (זקוק לעבודת שיפוץ)",
  ]
  airwayList = [
    "1","2","3","4"
  ]
  viewList = [
    "ללא",
    "לים",
    "לפארק",
    "לעיר",
  ]

  constructor(
    private fb : FormBuilder
  ){}
  form!: FormGroup

  ngOnInit(): void {
  this.form = this.fb.group({
    city:[ this.data?.city ,Validators.required],
    street:[ this.data?.street ,Validators.required],
    streetNumber:[ this.data?.streetNumber ,[Validators.required,Validators.pattern(/^[0-9]*$/)]],
    floor:[ this.data?.street ,[Validators.required,Validators.pattern(/^[0-9]*$/)]],
    floorTotal:[ this.data?.street ,[Validators.required,Validators.pattern(/^[0-9]*$/)]],
    type:[this.data?.type, Validators.required],
    condition:[this.data?.condition, Validators.required],
    airWays:[this.data?.airWays, Validators.required],
    openView:[this.data?.openView, Validators.required],
    rearAsset:[this.data?.rearAsset]
  })  
  }

  onSubmit(){
    console.log(this.form.valid)
    console.log(this.form.value)

    if(this.form.valid)
      this.formCompleted.emit(this.form.value)
  }
}
