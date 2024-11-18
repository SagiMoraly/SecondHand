import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { IClientSaleObj } from '../../realestate/interfaces/IClientSaleObj';
import { MainAPIService } from './main-api.service';

@Injectable({
  providedIn: 'root'
})
export class RealestateApiService {
  
    REALESTATE_API_URL = "https://localhost:7155/api/Realestate"

  constructor(
    private http: HttpClient,
    private mainApi : MainAPIService
  ) { }

  async postSaleRealestate(clientSaleObj : IClientSaleObj ){
    const {images , realestateData} = clientSaleObj
    console.log("before sending",images);
    const imagePath = await this.mainApi.uploadImages(images)
    console.log(imagePath);
    const didSave = await firstValueFrom(this.http.post(
      this.REALESTATE_API_URL , 
      {...realestateData , images: imagePath}))
    return didSave
  }
  
}
