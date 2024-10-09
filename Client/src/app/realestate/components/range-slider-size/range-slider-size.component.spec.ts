import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeSliderSizeComponent } from './range-slider-size.component';

describe('RangeSliderSizeComponent', () => {
  let component: RangeSliderSizeComponent;
  let fixture: ComponentFixture<RangeSliderSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RangeSliderSizeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangeSliderSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
