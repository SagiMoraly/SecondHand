import { Options } from '@angular-slider/ngx-slider';
import { Component } from '@angular/core';

@Component({
  selector: 'app-range-slider-size',
  templateUrl: './range-slider-size.component.html',
  styleUrl: './range-slider-size.component.scss',
})
export class RangeSliderSizeComponent {
  minValue: number = 0;
  maxValue: number = 500;
  inputMin: number | string = '0';
  inputMax: number | string = '500+';
  minInPutFlag = false
  maxInPutFlag = false
  options: Options = {
    floor: 0,
    ceil: 500,
    step: 20,
    showTicks: true,
    rightToLeft: true,
  };

  onMinValueChange(num: number) {
    if(num == 0)
      this.inputMax = this.numberToPriceString((num+Number(String(this.inputMax).replaceAll('+', ''))).toString());
    else
      this.inputMin = this.numberToPriceString(num.toString().replaceAll('+', ''));
  }

  onMaxValueChange(num: number) {
    if(num == 0)
      this.inputMax = this.numberToPriceString((num+Number(String(this.inputMax).replaceAll(',', ''))).toString());
    else
      this.inputMax = this.numberToPriceString(num.toString().replaceAll('+', ''));
  }

  numberToPriceString(num: string) {
    if(num === "500")
      return num +'+' ;
    return num
  }

  setMin(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    let number = input.replaceAll('+', '');
    this.inputMin = this.numberToPriceString(number);  
    this.minValue = Number(number);
  } 

  setMax(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    let number = input.replaceAll('+', '');
    this.inputMax = this.numberToPriceString(number);
    this.maxValue = Number(number);
  }

  validateNumberInput(event: KeyboardEvent): void {
    const charCode = event.keyCode ? event.keyCode : event.which;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }
}
