import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateStage5Component } from './estate-stage5.component';

describe('EstateStage5Component', () => {
  let component: EstateStage5Component;
  let fixture: ComponentFixture<EstateStage5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstateStage5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstateStage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
