import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingproComponent } from './upcomingpro.component';

describe('UpcomingproComponent', () => {
  let component: UpcomingproComponent;
  let fixture: ComponentFixture<UpcomingproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
