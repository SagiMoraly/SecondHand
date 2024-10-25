import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateStage1Component } from './estate-stage1.component';

describe('EstateStage1Component', () => {
  let component: EstateStage1Component;
  let fixture: ComponentFixture<EstateStage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstateStage1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstateStage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
