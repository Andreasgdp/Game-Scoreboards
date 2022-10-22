import { PointGivenScoreboard } from "@models/PGS";


export class ScoreboardHistory {
  date?: Date;
  // In the future it will be PointGivenScoreboard | SomeOtherScoreboard | and so on...
  scoreboard?: PointGivenScoreboard;
}
