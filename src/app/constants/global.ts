import { TempMatch } from '../models/match.model';
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

export const storedCurrMatch: TempMatch = {
  hostTeamId: 1,
  visitorTeamId: 2,
  hostTeam: 'Team A',
  visitorTeam: 'Team B',
  currentInnings: {
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
    thisOver: [
      {
        overNo: 0,
        runsConceded: 0,
        allBalls: [],
      },
    ],
    batsman: [],
    bowler: [],
  },
};

// {
//   hostTeam: 'Team A',
//   visitorTeam: 'Team B',
//   currentInnings: {
//     teamName: 'Team A',
//     inningNo: 1,
//     score: {
//       totalRuns: 70,
//       totalWickets: 5,
//       totalOvers: 7.2,
//       currRunrate: (14.0).toFixed(2),
//       extraRuns: { legBy: 4, wide: 64, noBall: 6 },
//     },
//     thisOver: [
//       {
//         overNo: 7,
//         runsConceded: 18,
//         allBalls: [
//           {
//             ballNo: 1,
//             runs: 0,
//             isWicket: false,
//             isValid: true,
//             extraRuns: 1,
//             extraType: ExtraRunType.LegBy,
//           },
//           {
//             ballNo: 2,
//             runs: 1,
//             isWicket: false,
//             isValid: true,
//             extraRuns: 0,
//             extraType: ExtraRunType.LegBy,
//           },
//           {
//             ballNo: 3,
//             runs: 0,
//             isWicket: false,
//             isValid: true,
//             extraRuns: 4,
//             extraType: ExtraRunType.LegBy,
//           },
//           {
//             ballNo: 4,
//             runs: 4,
//             isWicket: false,
//             isValid: true,
//             extraRuns: 0,
//             extraType: ExtraRunType.NoBall,
//           },
//           {
//             ballNo: 5,
//             runs: 6,
//             isWicket: false,
//             isValid: true,
//             extraRuns: 0,
//             extraType: ExtraRunType.NoBall,
//           },
//           {
//             ballNo: 6,
//             runs: 0,
//             isWicket: true,
//             isValid: true,
//             extraRuns: 0,
//             extraType: ExtraRunType.NoBall,
//           },
//         ],
//       },
//     ],
//     batsman: [
//       {
//         playerName: 'Player 1',
//         isOnStrike: true,
//         outStatus: OutStatus.NOT_OUT,
//         runsScored: 10,
//         ballsPlayed: 12,
//         fours: 3,
//         sixes: 8,
//         strikeRate: 164.24,
//       },
//       {
//         playerName: 'Player 2',
//         isOnStrike: false,
//         outStatus: OutStatus.NOT_OUT,
//         runsScored: 40,
//         ballsPlayed: 22,
//         fours: 1,
//         sixes: 3,
//         strikeRate: 144.67,
//       },
//     ],
//     bowler: [
//       {
//         playerName: 'Player 9',
//         overs: 2,
//         maidens: 1,
//         runsConceded: 22,
//         wickets: 4,
//         economyRate: 5.6,
//       },
//     ],
//   },
// }
