import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'game-scoreboards-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}
  title = 'game';

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
