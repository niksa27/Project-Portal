import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdetailsComponent } from './updetails.component';

describe('UpdetailsComponent', () => {
  let component: UpdetailsComponent;
  let fixture: ComponentFixture<UpdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
