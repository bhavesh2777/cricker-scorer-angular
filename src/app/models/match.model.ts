import { Team } from './team.model';

// export enum OptedTypeEnum {
//   Bat = 'Bat',
//   Bowl = 'Bowl',
// }
// export enum MatchStatusType {
//   Active = 'Active',
//   Inactive = 'Inactive',
// }

export class AdvancedSettings {
  static playersPerTeam = 11;
  static isNoBallAllowed = true;
  static noBallReBall = true;
  static noBallRun = 1;
  static isWideBallAllowed = true;
  static wideBallReBall = true;
  static wideBallRun = 1;

  constructor(
    public playersPerTeam = AdvancedSettings.playersPerTeam,
    public isNoBallAllowed = AdvancedSettings.isNoBallAllowed,
    public noBallReBall = AdvancedSettings.noBallReBall,
    public noBallRun = AdvancedSettings.noBallRun,
    public isWideBallAllowed = AdvancedSettings.isWideBallAllowed,
    public wideBallReBall = AdvancedSettings.wideBallReBall,
    public wideBallRun = AdvancedSettings.wideBallRun
  ) {}
}

// export class OneBall {
//   constructor(
//     public strikeBatsman: string,
//     public nonStrikeBatsman: string,
//     public runsConceded: number,
//     public isWideBall: boolean,
//     public isNoBall: boolean,
//     public isLegBy: boolean,
//     public isBatsmanOut: boolean
//   ) {}
// }

// export class OneOver {
//   constructor(
//     public bowlerName: string,
//     public totalRunsConceded: number,
//     public totalWickets: number,
//     public totalBalls: number,
//     public sixBalls: OneBall[]
//   ) {}
// }

// export class ExtraRuns {
//   constructor(
//     public wideRuns: number,
//     public noballRuns: number,
//     public legByRuns: number
//   ) {}
// }

// export class TeamInnings {
//   constructor(
//     public totalRuns: number,
//     public oversPlayed: number,
//     public isInningsOver: boolean,
//     public currentRunRate: number,
//     public extraRuns: ExtraRuns,
//     public teamDetails: Team,
//     public matchAllOvers: OneOver[]
//   ) {}
// }

// export class FullMatchScore {
//   constructor(
//     public hostTeamInnings: TeamInnings,
//     public visitorTeamInnings: TeamInnings
//   ) {}
// }

export enum OutStatus {
  NOT_OUT = 'NOT_OUT',
  OUT = 'OUT',
}

export interface BattingElements {
  playerName: string;
  playerId: number;
  isOnStrike: boolean;
  outStatus: OutStatus;
  runsScored: number;
  ballsPlayed: number;
  fours: number;
  sixes: number;
  strikeRate: string;
}

export interface BowlingElements {
  playerName: string;
  playerId: number;
  overs: number;
  ballsThrowed: number;
  isBowlingCurr: boolean;
  maidens: number;
  runsConceded: number;
  wickets: number;
  economyRate: string;
}

export enum ExtraRunType {
  Wide = 'WD',
  NoBall = 'NB',
}

export class OneBallElement {
  constructor(
    public ballNo: number,
    public runs: number,
    public isWicket: boolean,
    public isValid: boolean,
    public extraRuns: number,
    public extraType: ExtraRunType
  ) {}
}

export class CurrentMatch {
  constructor(
    public hostTeamId: number,
    public visitorTeamId: number,
    public hostTeam: string,
    public visitorTeam: string,
    public optedTo: string,
    public tossWonBy: number,
    public matchOvers: number,
    public currentInnings: OneInning[]
  ) {}
}

export class OneInning {
  constructor(
    public teamId: number,
    public teamName: string,
    public inningNo: number,
    public score: CurrentInningsScore,
    public batsman: BattingElements[],
    public bowler: BowlingElements[],
    public thisOver: OneOver[]
  ) {}
}

export class CurrentInningsScore {
  constructor(
    public totalRuns: number,
    public totalWickets: number,
    public totalBalls: number,
    public currRunrate: string,
    public extraRuns: { wide: number; noBall: number }
  ) {}
}

export class OneOver {
  constructor(
    public overNo: number,
    public runsConceded: number,
    public allBalls: OneBallElement[]
  ) {}
}

export interface ScoreRunDetails {
  runScored: number;
  wideType: boolean;
  noBall: boolean;
  wicket: boolean;
}
