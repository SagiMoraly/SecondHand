import { Options } from '@angular-slider/ngx-slider';
import { Component } from '@angular/core';

@Component({
  selector: 'app-range-slider-floor',
  templateUrl: './range-slider-floor.component.html',
  styleUrl: './range-slider-floor.component.scss',
})
export class RangeSliderFloorComponent {
  myDropDown : string = "";
  minValue: number = 0;
  maxValue: number = 21;
  inputMin: number | string = '₪0';
  inputMax: number | string = '₪20,000,000';
  minInPutFlag = false
  maxInPutFlag = false
  options: Options = {
    floor: 0,
    ceil: 21,
    step: 1,
    showTicks: true,
    rightToLeft: true,
  };

  floorList =[
    {
      name:"מרתף",
      value: 0,
    },{
      name:"קרקע",
      value: 1,
    },{
      name:"1",
      value: 2,
    },{
      name:"2",
      value: 3,
    },{
      name:"3",
      value: 4,
    },{
      name:"4",
      value: 5,
    },{
      name:"5",
      value: 6,
    },{
      name:"6",
      value: 7,
    },{
      name:"7",
      value: 8,
    },{
      name:"8",
      value: 9,
    },{
      name:"9",
      value: 10,
    },{
      name:"10",
      value: 11,
    },{
      name:"11",
      value: 12,
    },{
      name:"12",
      value: 13,
    },{
      name:"13",
      value: 14,
    },{
      name:"14",
      value: 15,
    },{
      name:"15",
      value: 16,
    },{
      name:"16",
      value: 17,
    },{
      name:"17",
      value: 18,
    },{
      name:"18",
      value: 19,
    },{
      name:"19",
      value: 20,
    },{
      name:"+20",
      value: 21,
    }
]

  // onMinValueChange(num: number) {
  //   //if flag no
  //   // if(!this.minInPutFlag){
  //     console.log(num,Number(String(this.inputMin).replaceAll(',', '').replaceAll('₪', '')));
  //     if(num == 0)
  //       this.inputMin = this.numberToPriceString((num+Number(String(this.inputMin).replaceAll(',', '').replaceAll('₪', ''))).toString());
  //     else
  //     this.inputMin = this.numberToPriceString(num.toString());
  //   // }
  // }

  // onMaxValueChange(num: number) {
  //   console.log(num);
  //   if(num == 0)
  //     this.inputMax = this.numberToPriceString((num+Number(String(this.inputMax).replaceAll(',', '').replaceAll('₪', ''))).toString());
  //   else
  //   this.inputMax = this.numberToPriceString(num.toString());
  // }

  // numberToPriceString(num: string) {
  //   return '₪' + num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // }

  // setMin(event: Event) {
  //   console.log(event);
    
  //   // const input = (event.target as HTMLInputElement).value;
  //   // console.log(input);

  //   // const number = input.replaceAll(',', '').replaceAll('₪', '');
  //   // console.log(number);
  //   // this.inputMin = this.numberToPriceString(number);
  //   // // flag
  //   // this.minInPutFlag = true
  //   // this.minValue = Number(number);
  //   // this.minInPutFlag = false
  //   // // reset flag
  // }

  // setMax(event: Event) {
  //   const input = (event.target as HTMLInputElement).value;
  //   const number = input.replaceAll(',', '').replaceAll('₪', '');
  //   this.inputMax = this.numberToPriceString(number);
  //   this.maxValue = Number(number);
  // }

  // validateNumberInput(event: KeyboardEvent): void {
  //   const charCode = event.keyCode ? event.keyCode : event.which;
  //   if (charCode < 48 || charCode > 57) {
  //     event.preventDefault();
  //   }
  // }
}
