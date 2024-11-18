import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-estate-stage5',
  templateUrl: './estate-stage5.component.html',
  styleUrl: './estate-stage5.component.scss',
})
export class EstateStage5Component implements OnInit{
  @Input() show!: boolean
  @Input() data: undefined | {type:number}
  @Output() formCompleted = new EventEmitter<{type:number}>()

  constructor(
    private fb : FormBuilder
  ){}
  form!: FormGroup
  imgURLList: string[] = []
  fileList: File[] = []
  ngOnInit(): void {
    this.form = this.fb.group({
      images: [[]]
    })
  }

  upDateFormImages(){
    this.form.controls['images'].setValue(this.fileList)
  }

  convertFromFileToURLImage(e:any){
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0]
    if (file) {
      this.imgURLList.push(URL.createObjectURL(file))  
      this.fileList.push(file)     
    }
    this.upDateFormImages()
  }

  removeThisImage(index: number){
    this.imgURLList.splice(index, 1)
    this.fileList.splice(index, 1)
    this.upDateFormImages()
  }

  onSubmit(){
    console.log(this.form.valid)
    console.log(this.form.value)

    if(this.form.valid)
      this.formCompleted.emit(this.form.value)
  }
}