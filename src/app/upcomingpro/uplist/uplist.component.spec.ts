import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UplistComponent } from './uplist.component';

describe('UplistComponent', () => {
  let component: UplistComponent;
  let fixture: ComponentFixture<UplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
