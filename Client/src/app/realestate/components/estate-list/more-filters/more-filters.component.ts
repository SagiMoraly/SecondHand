import { AfterViewInit, ChangeDetectorRef, Component, QueryList, TemplateRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-more-filters',
  templateUrl: './more-filters.component.html',
  styleUrl: './more-filters.component.scss'
})
export class MoreFiltersComponent implements AfterViewInit {
  @ViewChildren('svg') svgsIcons!: QueryList<TemplateRef<any>>

  icons: any = []
  propertyList = [
  {
    name: "חניה",
    selected: false
  },{
    name: "מעלית",
    selected: false
  },{
    name: 'ממ"ד',
    selected: false
  },{
    name: "מרפסת",
    selected: false
  },{
    name: "מיזוג",
    selected: false
  },{
    name: "מחסן",
    selected: false
  },{
    name: "משופצת",
    selected: false
  },{
    name: "גישה לנכים",
    selected: false
  },{
    name: "סורגים",
    selected: false
  },{
    name: "מרוהטת",
    selected: false
  },{
    name: "בבלעדיות",
    selected: false
  }
]

constructor(private cd: ChangeDetectorRef) {}

ngAfterViewInit(): void {
  this.icons = this.svgsIcons.toArray()
  this.cd.detectChanges()
}


selectMeProperty(index : number){
  this.propertyList[index].selected = !this.propertyList[index].selected
}
}
