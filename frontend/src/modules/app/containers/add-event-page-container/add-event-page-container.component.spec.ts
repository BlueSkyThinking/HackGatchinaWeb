import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventPageContainerComponent } from './add-event-page-container.component';

describe('AddEventPageContainerComponent', () => {
  let component: AddEventPageContainerComponent;
  let fixture: ComponentFixture<AddEventPageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventPageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
