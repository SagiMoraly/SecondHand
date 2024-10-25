import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-option2',
  templateUrl: './select-option2.component.html',
  styleUrl: './select-option2.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SelectOption2Component
    }
  ]
})
export class SelectOption2Component implements ControlValueAccessor {
  @Input() options!: string[]
  
  onChange: OnChangeFn<string> = () => {}
  onTouch: OnTouchFn = () => {}

  selected: undefined | string

  selectMe(option : string){
    this.selected = option
    this.onChange(this.selected)
  }

  // control value accessor
  writeValue(value: string): void {
    if(value === null)return;
    this.selected = value
  }
  registerOnChange(fn: OnChangeFn<string>): void {
    this.onChange = fn
  }
  registerOnTouched(fn: OnTouchFn): void {
    this.onTouch = fn
  }
}

type OnChangeFn<T> = (value : T) => void
type OnTouchFn = () => void