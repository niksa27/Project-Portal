import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpeditComponent } from './upedit.component';

describe('UpeditComponent', () => {
  let component: UpeditComponent;
  let fixture: ComponentFixture<UpeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
