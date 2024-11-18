import { Component } from '@angular/core';
import { IClientSaleObj } from '../../../interfaces/IClientSaleObj';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { RealestateApiService } from '../../../../core/services/realestate-api.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrl: './form-add.component.scss'
})
export class FormAddComponent {
  stage = 1

  formData: any[] = []
constructor(
  private realestateApi : RealestateApiService
){}
  nextStageAndSaveData(data :{}, stage:number){
    this.stage++
    this.formData[stage] = data
    console.log(this.formData , this.stage)
    if(this.stage == 8)
      this.uploadRealestate(this.orderStagesObj(this.formData))
  }

  editMe(data:{} , stage:number){
    if(data)
      this.stage = stage
  }

  orderStagesObj(stages: any[]): IClientSaleObj{
    const realestateData = {...(stages[1]),...(stages[2]),...(stages[3]),...(stages[4]),...(stages[6]),...(stages[7])}
    
    let orderedObj:any = {
      images: stages[5].images,
      realestateData: {...realestateData, images:'' }
    }
    console.log(orderedObj);
    return orderedObj
  }

  uploadRealestate(clientSaleObj: IClientSaleObj){
    const fd = new FormData()
    clientSaleObj.images.forEach(
      (img,key) => fd.append(`images` , img as any, (img as any).name)
    )
    
    this.realestateApi.postSaleRealestate({...clientSaleObj, images:fd}).then(
      r => console.log("im here", r)
    )
   // model binder Image: IformFIle 
  }
}
