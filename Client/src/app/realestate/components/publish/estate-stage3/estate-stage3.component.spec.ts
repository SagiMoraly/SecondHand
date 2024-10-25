import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateStage3Component } from './estate-stage3.component';

describe('EstateStage3Component', () => {
  let component: EstateStage3Component;
  let fixture: ComponentFixture<EstateStage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstateStage3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstateStage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
