import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataNarrationsComponent } from './data-narrations.component';

describe('DataNarrationsComponent', () => {
  let component: DataNarrationsComponent;
  let fixture: ComponentFixture<DataNarrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataNarrationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataNarrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
