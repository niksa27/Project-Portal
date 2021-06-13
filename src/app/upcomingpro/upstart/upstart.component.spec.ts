import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpstartComponent } from './upstart.component';

describe('UpstartComponent', () => {
  let component: UpstartComponent;
  let fixture: ComponentFixture<UpstartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpstartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
