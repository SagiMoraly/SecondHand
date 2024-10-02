import { Component } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrl: './range-slider.component.scss',
})
export class RangeSliderComponent {
  noSwitchingSlider = {
    minValue: 0,
    maxValue: 20000,
    options: {
      floor: 0,
      ceil: 20000,
      step: 1000,
    },
  };

  onMinChange() {
    if (this.noSwitchingSlider.minValue >= this.noSwitchingSlider.maxValue) {
      this.noSwitchingSlider.minValue = this.noSwitchingSlider.maxValue - 1;
    }
  }

  onMaxChange() {
    if (this.noSwitchingSlider.maxValue <= this.noSwitchingSlider.minValue) {
      this.noSwitchingSlider.maxValue = this.noSwitchingSlider.minValue + 1;
    }
  }

  calculateLeftPosition(): number {
    const { minValue, options } = this.noSwitchingSlider;
    return ((minValue - options.floor) / (options.ceil - options.floor)) * 100;
  }

  calculateWidth(): number {
    const { minValue, maxValue, options } = this.noSwitchingSlider;
    return ((maxValue - minValue) / (options.ceil - options.floor)) * 100;
  }
}

  
