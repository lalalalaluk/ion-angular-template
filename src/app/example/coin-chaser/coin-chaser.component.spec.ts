import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinChaserComponent } from './coin-chaser.component';

describe('CoinChaserComponent', () => {
  let component: CoinChaserComponent;
  let fixture: ComponentFixture<CoinChaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinChaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinChaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
