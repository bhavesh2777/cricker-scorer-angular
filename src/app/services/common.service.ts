import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { storedCurrMatch, storedTeamsArr } from '../constants/global';
import { ExtraRunType, OutStatus, TempMatch } from '../models/match.model';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  activeMatch = new BehaviorSubject<TempMatch>(storedCurrMatch);
  allTeamSquad = new BehaviorSubject<Team[]>(storedTeamsArr);

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
