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
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-property-feature',
  templateUrl: './property-feature.component.html',
  styleUrl: './property-feature.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PropertyFeatureComponent
    }
  ]
})
export class PropertyFeatureComponent implements AfterViewInit , ControlValueAccessor{
  @ViewChildren('svg') svgsIcons!: QueryList<TemplateRef<any>>;
  @Output() furnitureDetail = new EventEmitter<boolean>();
  icons: any = [];

  onChange: OnChnageFn<string[]> = () => {}
  onTouchFn: OnTouchFn = () => {}

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

  writeValue(arr: string[]): void {
    if(arr === null)return;
    arr.forEach(item => {
      this.featureList.forEach(feature =>{
        if(feature.name === item)
          feature.selected = true
      })
    })
  }
  registerOnChange(fn: OnChnageFn<string[]>): void {
    this.onChange = fn
  }
  registerOnTouched(fn: OnTouchFn): void {
    this.onTouchFn = fn
  }

  ngAfterViewInit(): void {
    this.icons = this.svgsIcons?.toArray();
    this.cd.detectChanges();
  }

  selectMeFeature(index: number) {
    this.featureList[index].selected = !this.featureList[index].selected;
    if (index === 5) this.furniture = !this.furniture;

    if (this.featureList[index].name === 'ריהוט')
      this.furnitureDetail.emit(this.featureList[index].selected);
    
    this.onChange(this.getFeatureValue())
  }

  getFeatureValue(): string[]{
    const featureArray: string[] = []
    this.featureList.forEach(feature => {
      if(feature.selected){
        featureArray.push(feature.name)
      }
    })
    return featureArray
  }
}

type OnChnageFn<T> = (value: T) => void
type OnTouchFn = () => void