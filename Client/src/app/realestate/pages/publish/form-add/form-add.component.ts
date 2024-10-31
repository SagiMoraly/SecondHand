import { Component } from '@angular/core';
import { IClientSaleObj } from '../../../interfaces/IClientSaleObj';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrl: './form-add.component.scss'
})
export class FormAddComponent {
  stage = 1

  formData: any[] = []
constructor(private http:HttpClient){}
  nextStageAndSaveData(data :{}, stage:number){
    this.stage++
    this.formData[stage] = data
    console.log(this.formData , this.stage)
    if(this.stage == 8)
      this.uploadRealestate(this.orderStagesObj(this.formData)).then(
        r => console.log("nice " + r)
      ).catch(
        e => console.log(e)
      ) 
  }

  editMe(data:{} , stage:number){
    if(data)
      this.stage = stage
  }

  orderStagesObj(stages: any[]): IClientSaleObj{
    const realestateData = {...(stages[1]),...(stages[2]),...(stages[3]),...(stages[4]),...(stages[6]),...(stages[7])}
    let orderedObj:any = {
      images: stages[5],
      realestateData: {...realestateData, images:'' }
    }
    console.log(orderedObj);
    return orderedObj
  }

  uploadRealestate(body: IClientSaleObj){
    return firstValueFrom(this.http.post("https://localhost:7155/api/Realestate",body))
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
