import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishTypeComponent } from './publish-type.component';

describe('PublishTypeComponent', () => {
  let component: PublishTypeComponent;
  let fixture: ComponentFixture<PublishTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublishTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
