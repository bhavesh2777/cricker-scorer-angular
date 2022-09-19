export class Team {
  static maxPlayers = 11;
  constructor(
    public title: string,
    public matchesWon: number,
    public matchesLost: number,
    public teamImg?: string
  ) {}
}
