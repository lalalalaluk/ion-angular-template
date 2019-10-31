import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSpriteComponent } from './basic-sprite.component';

describe('BasicSpriteComponent', () => {
  let component: BasicSpriteComponent;
  let fixture: ComponentFixture<BasicSpriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicSpriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSpriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
