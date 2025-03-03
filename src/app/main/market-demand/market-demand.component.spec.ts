import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketDemandComponent } from './market-demand.component';

describe('MarketDemandComponent', () => {
  let component: MarketDemandComponent;
  let fixture: ComponentFixture<MarketDemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketDemandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
