import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerScoreControlComponent } from './player-score-control.component';

describe('PlayerScoreControlComponent', () => {
  let component: PlayerScoreControlComponent;
  let fixture: ComponentFixture<PlayerScoreControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerScoreControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerScoreControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
