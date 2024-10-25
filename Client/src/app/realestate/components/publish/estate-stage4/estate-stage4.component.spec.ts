import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateStage4Component } from './estate-stage4.component';

describe('EstateStage4Component', () => {
  let component: EstateStage4Component;
  let fixture: ComponentFixture<EstateStage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstateStage4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstateStage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
