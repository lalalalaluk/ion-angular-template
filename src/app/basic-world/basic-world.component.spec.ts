import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicWorldComponent } from './basic-world.component';

describe('BasicWorldComponent', () => {
  let component: BasicWorldComponent;
  let fixture: ComponentFixture<BasicWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
