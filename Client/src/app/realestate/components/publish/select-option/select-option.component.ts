import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrl: './select-option.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SelectOptionComponent
    }
  ]
})
export class SelectOptionComponent implements ControlValueAccessor {
  @Input() placeholder!: string
  @Input() list!: string[]

  onChange: OnChnageFn<string> = () => {}
  onTouchFn: OnTouchFn = () => {}
  selected: string | undefined
  open = false

  selectItem(item:string){
    this.open = false
    this.selected = item
    this.onChange(this.selected)
  }
  

  // control value accessor
  writeValue(val: string): void {
    if(val === null) return;
    this.selected = val
  }
  registerOnChange(fn: OnChnageFn<string>): void {
    this.onChange = fn
  }
  registerOnTouched(fn: OnTouchFn): void {
    this.onTouchFn = fn
  }
}
type OnChnageFn<T> = (value: T) => void
type OnTouchFn = () => void