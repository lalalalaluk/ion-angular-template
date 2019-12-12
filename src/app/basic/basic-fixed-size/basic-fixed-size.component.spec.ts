import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFixedSizeComponent } from './basic-fixed-size.component';

describe('BasicFixedSizeComponent', () => {
  let component: BasicFixedSizeComponent;
  let fixture: ComponentFixture<BasicFixedSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicFixedSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFixedSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
