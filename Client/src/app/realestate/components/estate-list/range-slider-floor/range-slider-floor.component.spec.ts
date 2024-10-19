import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeSliderFloorComponent } from './range-slider-floor.component';

describe('RangeSliderComponent', () => {
  let component: RangeSliderFloorComponent;
  let fixture: ComponentFixture<RangeSliderFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RangeSliderFloorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangeSliderFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
