import { Component, OnInit } from '@angular/core';
import { BattingElements, BowlingElements } from 'src/app/models/match.model';

const BATTING_ELEMENT_DATA: BattingElements[] = [
  {
    batsman: 'Player 1',
    runs: 10,
    balls: 10,
    fours: 1,
    sixes: 2,
    strikeRate: 164.24,
  },
  {
    batsman: 'Player 1',
    runs: 10,
    balls: 10,
    fours: 1,
    sixes: 2,
    strikeRate: 164.24,
  },
];

const BOWLING_ELEMENT_DATA: BowlingElements[] = [
  {
    bowler: 'Player 1',
    overs: 10,
    maidens: 10,
    runs: 1,
    wickets: 2,
    economyRate: 164.24,
  },
];

@Component({
  selector: 'app-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.css'],
})
export class ScoreTableComponent implements OnInit {
  battingColumns = [
    {
      columnDef: 'batsman',
      header: 'Batsman',
      cell: (element: BattingElements) => `${element.batsman}`,
    },
    {
      columnDef: 'runs',
      header: 'R',
      cell: (element: BattingElements) => `${element.runs}`,
    },
    {
      columnDef: 'balls',
      header: 'B',
      cell: (element: BattingElements) => `${element.balls}`,
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
  battingDataSource = BATTING_ELEMENT_DATA;
  battingDisplayedColumns = this.battingColumns.map((c) => c.columnDef);

  bowlingColumns = [
    {
      columnDef: 'bowler',
      header: 'Bowler',
      cell: (element: BowlingElements) => `${element.bowler}`,
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
      cell: (element: BowlingElements) => `${element.runs}`,
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
  bowlingDataSource = BOWLING_ELEMENT_DATA;
  bowlingDisplayedColumns = this.bowlingColumns.map((c) => c.columnDef);

  constructor() {}

  ngOnInit(): void {}
}
