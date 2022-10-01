import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  BattingElements,
  BowlingElements,
  FullMatchScore,
  TeamInnings,
  TempMatch,
} from 'src/app/models/match.model';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.css'],
})
export class ScoreTableComponent implements OnInit, OnDestroy {
  battingColumns = [
    {
      columnDef: 'batsman',
      header: 'Batsman',
      cell: (element: BattingElements) => `${element.playerName}`,
    },
    {
      columnDef: 'runs',
      header: 'R',
      cell: (element: BattingElements) => `${element.runsScored}`,
    },
    {
      columnDef: 'balls',
      header: 'B',
      cell: (element: BattingElements) => `${element.ballsPlayed}`,
    },
    {
      columnDef: 'fours',
      header: '4s',
      cell: (element: BattingElements) => `${element.fours}`,
    },
    {
      columnDef: 'sixes',
      header: '6s',
      cell: (element: BattingElements) => `${element.sixes}`,
    },
    {
      columnDef: 'strikeRate',
      header: 'SR',
      cell: (element: BattingElements) => `${element.strikeRate}`,
    },
  ];
  battingDisplayedColumns = this.battingColumns.map((c) => c.columnDef);

  bowlingColumns = [
    {
      columnDef: 'bowler',
      header: 'Bowler',
      cell: (element: BowlingElements) => `${element.playerName}`,
    },
    {
      columnDef: 'overs',
      header: 'O',
      cell: (element: BowlingElements) => `${element.overs}`,
    },
    {
      columnDef: 'maidens',
      header: 'M',
      cell: (element: BowlingElements) => `${element.maidens}`,
    },
    {
      columnDef: 'runs',
      header: 'R',
      cell: (element: BowlingElements) => `${element.runsConceded}`,
    },
    {
      columnDef: 'wickets',
      header: 'W',
      cell: (element: BowlingElements) => `${element.wickets}`,
    },
    {
      columnDef: 'economyRate',
      header: 'ER',
      cell: (element: BowlingElements) => `${element.economyRate}`,
    },
  ];
  bowlingDisplayedColumns = this.bowlingColumns.map((c) => c.columnDef);

  activeMatchSub: Subscription | undefined;
  currInningScore;
  battingDataSource = [];
  bowlingDataSource = [];
  constructor(private readonly commonService: CommonService) {}

  ngOnInit() {
    this.activeMatchSub = this.commonService.activeMatch.subscribe(
      (activeMatchObj: TempMatch) => {
        this.currInningScore = activeMatchObj?.currentInnings?.score;
        this.battingDataSource = activeMatchObj.currentInnings.batsman;
        this.bowlingDataSource = activeMatchObj.currentInnings.bowler;
      }
    );
  }

  ngOnDestroy() {
    this.activeMatchSub?.unsubscribe();
  }
}
