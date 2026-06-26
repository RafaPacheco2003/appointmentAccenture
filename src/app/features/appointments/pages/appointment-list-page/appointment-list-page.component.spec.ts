import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentListPageComponent } from './appointment-list-page.component';

describe('AppointmentListPageComponent', () => {
  let component: AppointmentListPageComponent;
  let fixture: ComponentFixture<AppointmentListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentListPageComponent]
    });
    fixture = TestBed.createComponent(AppointmentListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
