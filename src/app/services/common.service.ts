import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import {
  AdvancedSettings,
  Match,
  MatchStatusType,
  OptedTypeEnum,
} from '../models/match.model';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  activeMatchObj = new BehaviorSubject<Match | null>({
    matchId: 1,
    hostTeam: 'Team A',
    visitorTeam: 'Team B',
    tossWonBy: 'Team B',
    matchOvers: 11,
    optedTo: OptedTypeEnum.Bat,
    matchStatus: MatchStatusType.Active,
    firstInningsTeam: 'Team B',
    secondInningsTeam: 'Team A',
    fullMatchScore: {
      hostTeamInnings: {
        currentRunRate: 0,
        extraRuns: { legByRuns: 0, noballRuns: 0, wideRuns: 0 },
        isInningsOver: false,
        oversPlayed: 0,
        totalRuns: 0,
        matchAllOvers: [],
      },
      visitorTeamInnings: {
        currentRunRate: 0,
        extraRuns: { legByRuns: 0, noballRuns: 0, wideRuns: 0 },
        isInningsOver: false,
        oversPlayed: 0,
        totalRuns: 0,
        matchAllOvers: [],
      },
    },
    advancedSettings: new AdvancedSettings(),
  });
  constructor(private _snackBar: MatSnackBar) {}

  openSuccessSnackbar(message = 'Success!') {
    this._snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'snackbar-success',
    });
  }

  openFailureSnackbar(message = 'Something went wrong!') {
    this._snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'snackbar-failure',
    });
  }
}
