import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOption2Component } from './select-option2.component';

describe('SelectOption2Component', () => {
  let component: SelectOption2Component;
  let fixture: ComponentFixture<SelectOption2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectOption2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectOption2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
