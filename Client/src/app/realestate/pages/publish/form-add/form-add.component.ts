import { Component } from '@angular/core';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrl: './form-add.component.scss'
})
export class FormAddComponent {
  stage = 1


  formData: any[] = []

  nextStageAndSaveData(data :{}, stage:number){
    this.stage++
    this.formData[stage] = data
    console.log(this.formData)
  }

  editMe(data:{} , stage:number){
    if(data)
      this.stage = stage
  }
/*
  only one is active at a time
  3 types 
    1. not selected clean
    2. selected open
    3. completed openable
    make stages clickable only on type 3 (here)
  data from each one should be here in the main (here)
  pass data saved to the points?
  or send upwords the data for each one  
*/
}
