import { Component } from '@angular/core';

@Component({
  selector: 'app-forsale',
  templateUrl: './forsale.component.html',
  styleUrl: './forsale.component.scss'
})
export class ForsaleComponent {
  showOrderBy = false
  selectedOption = "תאריך"
  orderByList = [
    "תאריך",
    "מחיר - מהזול ליקר",
    "מחיר - מהיקר לזול",
    "קרוב אליי",
  ]

  realestateSearchList = [
    {
      id: "fbksjdlcuisk778",
      createdAt: new Date().getDate(),
      city: "רמת גן",
      street: "אלוף הנצחון",
      streetNumber: 16,
      floor: 5,
      floorsTotal: 9,
      neighborhood: "",
      area: "",
      type: "", // Enum: Apartment, Villa, etc.
      condition: "", // Enum: New, Renovated, etc.
      airWays: "", // Enum: 1-4 directions
      openView: "", // Enum: No view, Sea, Park, etc.
      rearAsset: "",
      updatesToEmail: "",
      rooms: 5, // Can be 1.5, 2.5, etc.
      showerRooms: "", // can be 1 - 4
      parking: "", // 0 - 3
      balcony: "", // 0 - 4
      features: ['ממ"ד', 'חניה', 'מחסן'], // JSON or CSV for features list
      furnitureDetails: "", // Can be null
      details: "",

      // Sale-specific properties
      dateOfEntering: "",
      squareBuild: "",
      squareMeter: 114,
      price: 4300000, // Sale price >= 10K

      image: "", // Placeholder for images or videos
      // public string ContactPhone { get; set; }
      // public string ContactName { get; set; }
      // public string ContactPhone2 { get; set; }
      // public string ContactName2 { get; set; }
      // public PackageType PackageType { get; set; } // Enum: Base, Premium, Upgraded

      // public bool GetUpdates { get; set; }

      // Foreign key to User
      // public int UserId { get; set; }
      // public UserModel User { get; set; }

      // Indicator if this is a favorite
      // public bool IsFavorite { get; set; }

      // add date
    },
    {
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
      price: 2300000, // Sale price >= 10K
    }
  ]

  contextLegnth = 100
  pageSize = 10
  
  changePage(page: unknown){
    console.log(page);
  }

}
