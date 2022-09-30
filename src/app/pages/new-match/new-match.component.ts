import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { storedTeamsArr } from 'src/app/constants/global';
import {
  AdvancedSettings,
  ExtraRuns,
  FullMatchScore,
  Match,
  MatchStatusType,
  OptedTypeEnum,
  TeamInnings,
} from 'src/app/models/match.model';
import { Team } from 'src/app/models/team.model';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-new-match',
  templateUrl: './new-match.component.html',
  styleUrls: ['./new-match.component.css'],
})
export class NewMatchComponent implements OnInit {
  newMatch: FormGroup;
  teamArr: Team[] = [];

  constructor(
    private readonly commonService: CommonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.teamArr = storedTeamsArr;
    this.newMatch = new FormGroup({
      hostTeam: new FormControl(this.teamArr[0].title, {
        validators: Validators.required,
      }),
      visitorTeam: new FormControl(this.teamArr[1].title, {
        validators: Validators.required,
      }),
      tossWonBy: new FormControl('2', { validators: Validators.required }),
      optedTo: new FormControl('2', { validators: Validators.required }),
      matchOvers: new FormControl(11, {
        validators: [
          Validators.required,
          Validators.pattern(/^[0-9]\d*$/),
          Validators.maxLength(3),
        ],
      }),
    });
  }

  submitStartMatch() {
    if (this.newMatch.valid) {
      const hostTeam = this.newMatch.controls['hostTeam'].value;
      const visitorTeam = this.newMatch.controls['visitorTeam'].value;
      const tossWonBy = this.newMatch.controls['tossWonBy'].value;
      const optedTo = this.newMatch.controls['optedTo'].value;
      const matchOvers = this.newMatch.controls['matchOvers'].value;

      let batFirstTeam = 'HOST';
      if (
        (tossWonBy == '1' && optedTo == '2') ||
        (tossWonBy == '2' && optedTo == '1')
      ) {
        batFirstTeam = 'VISITOR';
      }

      // const newMatchObj: Match = {
      //   matchId: 1,
      //   hostTeam: hostTeam,
      //   visitorTeam: visitorTeam,
      //   tossWonBy: tossWonBy == '1' ? hostTeam : visitorTeam,
      //   matchOvers: matchOvers,
      //   currentInning: 1,
      //   optedTo: optedTo == '1' ? OptedTypeEnum.Bat : OptedTypeEnum.Bowl,
      //   matchStatus: MatchStatusType.Active,
      //   fullMatchScore: {
      //     hostTeamInnings: {
      //       currentRunRate: 0,
      //       extraRuns: { legByRuns: 0, noballRuns: 0, wideRuns: 0 },
      //       isFirstInnings: batFirstTeam == 'HOST',
      //       isInningsStarted: false,
      //       isInningsOver: false,
      //       oversPlayed: 0,
      //       totalRuns: 0,
      //       matchAllOvers: [],
      //     },
      //     visitorTeamInnings: {
      //       currentRunRate: 0,
      //       extraRuns: { legByRuns: 0, noballRuns: 0, wideRuns: 0 },
      //       isFirstInnings: batFirstTeam == 'VISITOR',
      //       isInningsStarted: false,
      //       isInningsOver: false,
      //       oversPlayed: 0,
      //       totalRuns: 0,
      //       matchAllOvers: [],
      //     },
      //   },
      //   advancedSettings: new AdvancedSettings(),
      // };
      // this.commonService.activeMatchObj.next(newMatchObj);
      // this.router.navigate(['/active-match']);
    }
  }
}
