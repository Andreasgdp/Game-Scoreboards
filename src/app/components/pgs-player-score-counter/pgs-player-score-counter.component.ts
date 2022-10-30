import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface UpdatedScore {
  playerUid: string;
  score: number;
}

@Component({
  selector: 'pgs-player-score-counter',
  templateUrl: './pgs-player-score-counter.component.html',
  styleUrls: ['./pgs-player-score-counter.component.scss'],
})
export class PGSPlayerScoreCounterComponent implements OnInit {
  constructor() { }
  
  @Input() showControls: boolean = false;

  @Input() header: string = '';

  @Input() uid: string = '';

  @Input() description: string = '';

  @Input() imageUrl: string = '';

  @Input() disabled: boolean = false;

  @Input() score: number = 0;

  step: number = 1;

  @Input() minStep: number = 1;

  @Input() maxStep: number = 100;

  @Output() scoreUpdated: EventEmitter<UpdatedScore> = new EventEmitter();

  ngOnInit(): void {
    console.log('oh shit');
  }

  resetStep() {
    this.step = 1;
  }

  resetPlayerScore() {
    this.score = 0;
    this.scoreUpdated.emit({ playerUid: this.uid, score: this.score });
  }

  updatePlayer(event: any) {
    this.scoreUpdated.emit({
      playerUid: this.uid,
      score: event.value,
    });
  }
}
