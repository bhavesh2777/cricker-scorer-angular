export class Team {
  static maxPlayers = 11;
  constructor(
    public teamId: number,
    public title: string,
    public matchesWon: number,
    public matchesLost: number,
    public teamImg?: string
  ) {}
}
