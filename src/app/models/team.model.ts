import { Player } from './player.model';

export class Team {
  static maxPlayers = 11;
  constructor(
    public teamId: number,
    public title: string,
    public matchesWon: number,
    public matchesLost: number,
    public teamSquad: Player[],
    public teamImg?: string
  ) {}
}
