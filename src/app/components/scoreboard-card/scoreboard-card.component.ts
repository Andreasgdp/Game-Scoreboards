import { Component, EventEmitter, Input, OnInit, Output, Type } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'scoreboard-card',
  templateUrl: './scoreboard-card.component.html',
  styleUrls: ['./scoreboard-card.component.scss'],
  providers: [DialogService],
})
export class ScoreboardCardComponent implements OnInit {
  constructor(public dialogService: DialogService) {}

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
