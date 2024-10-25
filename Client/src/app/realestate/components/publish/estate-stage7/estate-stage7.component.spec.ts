import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateStage7Component } from './estate-stage7.component';

describe('EstateStage7Component', () => {
  let component: EstateStage7Component;
  let fixture: ComponentFixture<EstateStage7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstateStage7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstateStage7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
