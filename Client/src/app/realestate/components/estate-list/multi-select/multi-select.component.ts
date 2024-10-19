import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss',
})
export class MultiSelectComponent implements OnInit {
  apartmentList = [
    { name: 'דירה', selected: false },
    { name: 'דירת גן', selected: false },
    { name: 'גג/ פנטהאוז', selected: false },
    { name: 'דופלקס', selected: false },
    { name: 'תיירות ונופש', selected: false },
    { name: 'מרתף/ פרטר', selected: false },
    { name: 'טריפלקס', selected: false },
    { name: 'יחידת דיור', selected: false },
    { name: 'החלפת דירות', selected: false },
    { name: 'סאבלט', selected: false },
    { name: 'סטודיו/ לופט', selected: false },
  ];

  houseList = [
    { name: "בית פרטי/ קוטג'", selected: false },
    { name: 'דו משפחתי', selected: false },
    { name: 'משק חקלאי/ נחלה', selected: false },
    { name: 'משק עזר', selected: false },
  ];

  elseList = [
    { name: 'מגרשים', selected: false },
    { name: 'דיור מוגן', selected: false },
    { name: 'בניין מגורים', selected: false },
    { name: 'מחסן', selected: false },
    { name: 'חניה', selected: false },
    { name: "קב' רכישה/ זכות לנכס", selected: false },
    { name: 'כללי', selected: false },
  ];

  ngOnInit() {}

  selectMe(arr: { name: string; selected: boolean }[], index: number) {
    arr[index].selected = !arr[index].selected;
  }

  selectOrDeSelectAll(arr: { name: string; selected: boolean }[]) {
    if (arr.every((selectable) => selectable.selected))
      arr.forEach((selectable) => {
        selectable.selected = false;
      });
    else {
      arr.forEach((selectable) => {
        selectable.selected = true;
      });
    }
  }
}
