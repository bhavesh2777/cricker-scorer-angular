export enum optedTypeEnum {
  Bat = 'Bat',
  Bowl = 'Bowl',
}
export enum matchStatusType {
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

export class Match {
  static maxMatchOvers = 50;
  static minMatchOvers = 1;

  constructor(
    public hostTeam: string,
    public visitorTeam: string,
    public tossWonBy: string,
    public optedTo: optedTypeEnum,
    public matchOvers: number,
    public matchStatus: matchStatusType,
    public advancedSettings: AdvancedSettings
  ) {}
}
