import { Options } from '@angular-slider/ngx-slider';
import { Component } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrl: './range-slider.component.scss',
})
export class RangeSliderComponent {
  minValue: number = 0;
  maxValue: number = 20000000;
  inputMin: number | string = '₪0';
  inputMax: number | string = '₪20,000,000';
  minInPutFlag = false
  maxInPutFlag = false
  options: Options = {
    floor: 0,
    ceil: 20000000,
    step: 100000,
    showTicks: true,
    rightToLeft: true,
  };

  onMinValueChange(num: number) {
    //if flag no
    // if(!this.minInPutFlag){
      console.log(num,Number(String(this.inputMin).replaceAll(',', '').replaceAll('₪', '')));
      if(num == 0)
        this.inputMin = this.numberToPriceString((num+Number(String(this.inputMin).replaceAll(',', '').replaceAll('₪', ''))).toString());
      else
      this.inputMin = this.numberToPriceString(num.toString());
    // }
  }

  onMaxValueChange(num: number) {
    console.log(num);
    if(num == 0)
      this.inputMax = this.numberToPriceString((num+Number(String(this.inputMax).replaceAll(',', '').replaceAll('₪', ''))).toString());
    else
    this.inputMax = this.numberToPriceString(num.toString());
  }

  numberToPriceString(num: string) {
    return '₪' + num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  setMin(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    const number = input.replaceAll(',', '').replaceAll('₪', '');
    console.log(number);
    this.inputMin = this.numberToPriceString(number);
    // flag
    this.minInPutFlag = true
    this.minValue = Number(number);
    this.minInPutFlag = false
    // reset flag
  }

  setMax(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    const number = input.replaceAll(',', '').replaceAll('₪', '');
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
