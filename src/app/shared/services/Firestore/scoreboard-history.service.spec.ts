import { TestBed } from '@angular/core/testing';

import { ScoreboardHistoryService } from './scoreboard-history.service';

describe('ScoreboardHistoryService', () => {
  let service: ScoreboardHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreboardHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
