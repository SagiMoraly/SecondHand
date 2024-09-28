import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealestateDetailComponent } from './realestate-detail.component';

describe('RealestateDetailComponent', () => {
  let component: RealestateDetailComponent;
  let fixture: ComponentFixture<RealestateDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RealestateDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealestateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
