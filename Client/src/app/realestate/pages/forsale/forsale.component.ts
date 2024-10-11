import { Component } from '@angular/core';

@Component({
  selector: 'app-forsale',
  templateUrl: './forsale.component.html',
  styleUrl: './forsale.component.scss'
})
export class ForsaleComponent {
  showOrderBy = false

  orderBy = [
    {
      name: "תאריך",
      selected: true
    },
    {
      name: "מחיר - מהזול ליקל",
      selected: false
    },
    {
      name: "מחיר - מהיקר לזול",
      seleted: false
    },
    {
      name: "קרוב אליי",
      seleted: false
    }
  ]
}
