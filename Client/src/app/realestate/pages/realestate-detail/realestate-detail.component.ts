import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realestate-detail',
  templateUrl: './realestate-detail.component.html',
  styleUrl: './realestate-detail.component.scss'
})
export class RealestateDetailComponent implements OnInit{
 realestate = {
      id: "fbksjdlcuisk778",
      createdAt: new Date().getDate(),
      city: "רמת גן",
      street: "בננה סטריט",
      streetNumber: 25,
      floor: 1,
      floorsTotal: 3,
      rooms: 2.5, // Can be 1.5, 2.5, etc.
      features: ['ממ"ד', 'חניה', 'מחסן'], // for features list
      squareMeter: 213,
      price: 4700, // Sale price >= 10K
      details: "דירה להשכרה במרכז הרצליה מפנה דירה שווה מאוד שתי חדרים, חדר מקלחת, חדר שירותים, סלון (איפה ששמנו את המיטה בינתיים), מטבח, וחדר מכונת כביסה ומייבש. הדירה מרוהטת ויש בנוסף פריטים באיכות גבוהה שניתן לקנות. הדירה קרובה לשער העיר ולמרכזי קניות. בנוסף הדירה מיועדת בשנים הקרובות לפינוי בינוי מה שמשפיע על מחיר השכירות לטובת השוכר",
      condition: "במצב שמור"
    }
    title = ""
    subTitle = ""
    price = ""
    extraDetailList = ["סוג העסקה","מצב הנכס","קומות בבניין","סה״כ תשלום חודשי","ועד בית (לחודש)","ארנונה (לחודשיים)","מספר תשלומים","חניות","תאריך כניסה"]
    extraDetail: {name:string,data:any}[] = []
    featuresFromServer:string[] = []
    features = [
                  {
                    name: `מעלית`,
                    src:"images/realestate/elevator-icon.svg"
                  },
                  {
                    name: `גישה לנכים`,
                    src:"images/realestate/disabled-icon.svg"
                  },
                  {
                    name: `מזגן טורנדו`,
                    src:"images/realestate/airconditioning-tornado-icon.svg"
                  },
                  {
                    name: `דלתות רב-בריח`,
                    src:"images/realestate/lock-icon.svg"
                  },
                  {
                    name: `מיזוג`,
                    src:"images/realestate/aircondition-icon.svg"
                  },
                  {
                    name: `סורגים`,
                    src:"images/realestate/bars-icon.svg"
                  },
                  {
                    name: `מחסן`,
                    src:"images/realestate/storage-icon.svg"
                  },
                  {
                    name: `דוד שמש`,
                    src:"images/realestate/solarheater-icon.svg"
                  },
                  {
                    name: `משופצת`,
                    src:"images/realestate/renovated-icon.svg"
                  },
                  {
                    name: `ממ"ד`,
                    src:"images/realestate/saferoom-icon.svg"
                  },
    ]


    ngOnInit(): void {
      this.title = this.realestate.street + " " + this.realestate.streetNumber
      this.subTitle = this.realestate.city
      this.featuresFromServer = this.realestate.features
      this.price = this.realestate.price + " ₪" 
      const extraDetailData = ["השכרה", this.realestate.condition, this.realestate.floorsTotal, this.realestate.price, 0 , 0 , "גמיש" , "ללא", "כניסה גמישה"]

      for(let i = 0;i < this.extraDetailList.length;i++){
        this.extraDetail.push({name:this.extraDetailList[i] , data: extraDetailData[i]})
      } 
      console.log(this.extraDetail);
      
    }
}
