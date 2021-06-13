import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpitemComponent } from './upitem.component';

describe('UpitemComponent', () => {
  let component: UpitemComponent;
  let fixture: ComponentFixture<UpitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
