export enum OptedTypeEnum {
  Bat = 'Bat',
  Bowl = 'Bowl',
}
export enum MatchStatusType {
  Active = 'Active',
  Inactive = 'Inactive',
}

export interface BattingElements {
  batsman: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
}

export interface BowlingElements {
  bowler: string;
  overs: number;
  maidens: number;
  runs: number;
  wickets: number;
  economyRate: number;
}

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

export class OneBall {
  constructor(
    public strikeBatsman: string,
    public nonStrikeBatsman: string,
    public runsConceded: number,
    public isWideBall: boolean,
    public isNoBall: boolean,
    public isLegBy: boolean,
    public isBatsmanOut: boolean
  ) {}
}

export class OneOver {
  constructor(
    public bowlerName: string,
    public totalRunsConceded: number,
    public totalWickets: number,
    public totalBalls: number,
    public sixBalls: OneBall[]
  ) {}
}

export class ExtraRuns {
  constructor(
    public wideRuns: number,
    public noballRuns: number,
    public legByRuns: number
  ) {}
}

export class TeamInnings {
  constructor(
    public totalRuns: number,
    public oversPlayed: number,
    public isInningsOver: boolean,
    public currentRunRate: number,
    public extraRuns: ExtraRuns,
    public matchAllOvers: OneOver[]
  ) {}
}

export class FullMatchScore {
  constructor(
    public hostTeamInnings: TeamInnings,
    public visitorTeamInnings: TeamInnings
  ) {}
}

export class Match {
  static maxMatchOvers = 50;
  static minMatchOvers = 1;

  constructor(
    public matchId: number,
    public hostTeam: string,
    public visitorTeam: string,
    public tossWonBy: string,
    public matchOvers: number,
    public firstInningsTeam: string,
    public secondInningsTeam: string,
    public optedTo: OptedTypeEnum,
    public matchStatus: MatchStatusType,
    public fullMatchScore: FullMatchScore,
    public advancedSettings: AdvancedSettings
  ) {}
}
