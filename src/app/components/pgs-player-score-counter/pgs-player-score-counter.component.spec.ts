import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PGSPlayerScoreCounterComponent } from './pgs-player-score-counter.component';

describe('PGSPlayerScoreCounterComponent', () => {
  let component: PGSPlayerScoreCounterComponent;
  let fixture: ComponentFixture<PGSPlayerScoreCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PGSPlayerScoreCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PGSPlayerScoreCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
