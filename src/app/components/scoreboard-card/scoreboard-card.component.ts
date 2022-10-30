import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'scoreboard-card',
  templateUrl: './scoreboard-card.component.html',
  styleUrls: ['./scoreboard-card.component.scss'],
})
export class ScoreboardCardComponent implements OnInit {
  constructor() {}

  @Input() header: string = '';

  @Input() subHeader: string = '';

  @Input() description: string = '';

  @Input() imageUrl: string = '';

  @Input() disabled: boolean = false;

  @Output() clicked: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {}

  createGame() {
    this.clicked.emit(true);
  }
}
