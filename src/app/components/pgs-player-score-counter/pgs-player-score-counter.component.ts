import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface UpdatedScore {
  playerUid: string;
  score: number;
}

@Component({
  selector: 'pgs-player-score-counter',
  templateUrl: './pgs-player-score-counter.component.html',
  styleUrls: ['./pgs-player-score-counter.component.scss'],
})
export class PGSPlayerScoreCounterComponent implements OnInit {
  constructor() {}

  @Input() header: string = '';

  @Input() uid: string = '';

  @Input() description: string = '';

  @Input() imageUrl: string = '';

  @Input() disabled: boolean = false;

  @Input() score: number = 0;

  step: number = 1;

  @Input() minStep: number = -100;

  @Input() maxStep: number = 100;

  @Output() scoreUpdated: EventEmitter<UpdatedScore> = new EventEmitter();

  ngOnInit(): void {}

  resetStep() {
    this.step = 1;
  }
  updateGame(event: any) {
    this.scoreUpdated.emit({
      playerUid: this.uid,
      score: event.value,
    });
  }
}
