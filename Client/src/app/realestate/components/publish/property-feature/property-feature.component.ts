import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-property-feature',
  templateUrl: './property-feature.component.html',
  styleUrl: './property-feature.component.scss',
})
export class PropertyFeatureComponent implements AfterViewInit {
  @ViewChildren('svg') svgsIcons!: QueryList<TemplateRef<any>>;
  @Output() furnitureDetail = new EventEmitter<boolean>();
  icons: any = [];

  featureList = [
    {
      name: `גישה לנכים`,
      selected: false,
    },
    {
      name: `מיזוג`,
      selected: false,
    },
    {
      name: `סורגים`,
      selected: false,
    },
    {
      name: `דוד שמש`,
      selected: false,
    },
    {
      name: `מעלית`,
      selected: false,
    },
    {
      name: `ריהוט`,
      selected: false,
    },
    {
      name: `יחידת דיור`,
      selected: false,
    },
    {
      name: `מטבח כשר`,
      selected: false,
    },
    {
      name: `משופצת`,
      selected: false,
    },
    {
      name: `ממ״ד`,
      selected: false,
    },
    {
      name: `מחסן`,
      selected: false,
    },
    {
      name: `דלתות רב-בריח`,
      selected: false,
    },
    {
      name: `מזגן טורנדו`,
      selected: false,
    },
  ];
  furniture = false;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.icons = this.svgsIcons?.toArray();
    this.cd.detectChanges();
  }

  selectMeFeature(index: number) {
    this.featureList[index].selected = !this.featureList[index].selected;
    if (index === 5) this.furniture = !this.furniture;

    if (this.featureList[index].name === 'ריהוט')
      this.furnitureDetail.emit(this.featureList[index].selected);
  }
}
