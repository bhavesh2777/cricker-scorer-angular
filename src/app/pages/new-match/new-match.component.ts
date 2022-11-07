import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { storedTeamsArr } from 'src/app/constants/global';
import { AdvancedSettings, CurrentMatch } from 'src/app/models/match.model';
import { Team } from 'src/app/models/team.model';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-new-match',
  templateUrl: './new-match.component.html',
  styleUrls: ['./new-match.component.css'],
})
export class NewMatchComponent implements OnInit {
  newMatch: FormGroup | undefined;
  teamArr: Team[] = [];

  constructor(
    private readonly commonService: CommonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.teamArr = storedTeamsArr;
    this.newMatch = new FormGroup({
      hostTeam: new FormControl(this.teamArr[0].teamId, {
        validators: Validators.required,
      }),
      visitorTeam: new FormControl(this.teamArr[1].teamId, {
        validators: Validators.required,
      }),
      tossWonBy: new FormControl('HOST', { validators: Validators.required }),
      optedTo: new FormControl('BAT', { validators: Validators.required }),
      matchOvers: new FormControl(10, {
        validators: [
          Validators.required,
          Validators.pattern(/^[0-9]\d*$/),
          Validators.maxLength(3),
        ],
      }),
    });
  }

  submitStartMatch() {
    if (this.newMatch?.valid) {
      const hostTeamId = this.newMatch.controls['hostTeam'].value;
      const visitorTeamId = this.newMatch.controls['visitorTeam'].value;
      const tossWonBy = this.newMatch.controls['tossWonBy'].value;
      const optedTo = this.newMatch.controls['optedTo'].value;
      const matchOvers = this.newMatch.controls['matchOvers'].value;

      // Decide toss outcome
      let hostTeamName = '';
      let visitorTeamName = '';
      this.teamArr.forEach((item) => {
        if (item.teamId == hostTeamId) hostTeamName = item.title;
        if (item.teamId == visitorTeamId) visitorTeamName = item.title;
      });

      const batFirstTeam = { id: hostTeamId, name: hostTeamName };
      if (
        (tossWonBy == 1 && optedTo == 'BOWL') ||
        (tossWonBy == 2 && optedTo == 'BAT')
      ) {
        batFirstTeam.id = visitorTeamId;
        batFirstTeam.name = visitorTeamName;
      }

      // Push the new match
      const newMatchObj: CurrentMatch = {
        hostTeamId: hostTeamId,
        visitorTeamId: visitorTeamId,
        hostTeam: hostTeamName,
        visitorTeam: visitorTeamName,
        optedTo: optedTo,
        tossWonBy: tossWonBy,
        matchOvers: matchOvers,
        currentInnings: [
          {
            teamId: batFirstTeam.id,
            teamName: batFirstTeam.name,
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
      this.commonService.activeMatch.next(newMatchObj);
      this.router.navigate(['/active-match']);
    }
  }
}
