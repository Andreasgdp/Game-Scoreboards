import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreboardCardComponent } from './scoreboard-card.component';

describe('ScoreboardCardComponent', () => {
  let component: ScoreboardCardComponent;
  let fixture: ComponentFixture<ScoreboardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreboardCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreboardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
