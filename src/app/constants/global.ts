import { CurrentMatch } from '../models/match.model';
import { Team } from '../models/team.model';

export const storedTeamsArr: Team[] = [
  {
    teamId: 1,
    title: 'Team A',
    matchesLost: 0,
    matchesWon: 0,
    teamSquad: [
      { playerId: 1, playerName: 'Player 1' },
      { playerId: 2, playerName: 'Player 2' },
      { playerId: 3, playerName: 'Player 3' },
      { playerId: 4, playerName: 'Player 4' },
      { playerId: 5, playerName: 'Player 5' },
    ],
  },
  {
    teamId: 2,
    title: 'Team B',
    matchesLost: 0,
    matchesWon: 0,
    teamSquad: [
      { playerId: 11, playerName: 'Player 11' },
      { playerId: 12, playerName: 'Player 12' },
      { playerId: 13, playerName: 'Player 13' },
      { playerId: 14, playerName: 'Player 14' },
      { playerId: 15, playerName: 'Player 15' },
    ],
  },
];

export const storedCurrMatch: CurrentMatch = {
  hostTeamId: 1,
  visitorTeamId: 2,
  hostTeam: 'Team A',
  visitorTeam: 'Team B',
  optedTo: 'BAT',
  tossWonBy: 1,
  matchOvers: 10,
  currentInnings: [
    {
      teamId: 1,
      teamName: 'Team A',
      inningNo: 1,
      score: {
        totalRuns: 0,
        totalWickets: 0,
        totalBalls: 0,
        currRunrate: (0.0).toFixed(2),
        extraRuns: { wide: 0, noBall: 0 },
      },
      thisOver: [],
      batsman: [],
      bowler: [],
    },
  ],
};
