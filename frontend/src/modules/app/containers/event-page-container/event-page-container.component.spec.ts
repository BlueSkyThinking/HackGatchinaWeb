import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPageContainerComponent } from './event-page-container.component';

describe('EventPageContainerComponent', () => {
  let component: EventPageContainerComponent;
  let fixture: ComponentFixture<EventPageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
