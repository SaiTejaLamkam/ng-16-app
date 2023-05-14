import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNotificationComponent } from './bottom-notification.component';

describe('BottomNotificationComponent', () => {
  let component: BottomNotificationComponent;
  let fixture: ComponentFixture<BottomNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomNotificationComponent]
    });
    fixture = TestBed.createComponent(BottomNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
