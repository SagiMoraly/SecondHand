import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateStage2Component } from './estate-stage2.component';

describe('EstateStage2Component', () => {
  let component: EstateStage2Component;
  let fixture: ComponentFixture<EstateStage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstateStage2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstateStage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
