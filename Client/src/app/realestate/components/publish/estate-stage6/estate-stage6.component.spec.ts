import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateStage6Component } from './estate-stage6.component';

describe('EstateStage6Component', () => {
  let component: EstateStage6Component;
  let fixture: ComponentFixture<EstateStage6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstateStage6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstateStage6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
