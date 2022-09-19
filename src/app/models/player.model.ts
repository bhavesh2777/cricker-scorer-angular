export class Player {
  constructor(
    public playerName: string,
    public matchesPlayed: number,
    public totalInnings: number,
    public totalRuns: number,
    public bestScore: number,
    public totalFours: number,
    public totalSixes: number,
    public totalFifties: number,
    public totalHundreds: number,
    public playerImg?: string
  ) {}
}
