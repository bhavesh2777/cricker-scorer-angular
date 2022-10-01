import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { storedTeamsArr } from 'src/app/constants/global';
import {
  AdvancedSettings,
  ExtraRuns,
  FullMatchScore,
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
  newMatch: FormGroup | undefined;
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
    if (this.newMatch?.valid) {
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
      //   hostTeam: 'Team A',
      //   visitorTeam: 'Team B',
      //   tossWonBy: 'Team A',
      //   matchOvers: 11,
      //   optedTo: OptedTypeEnum.Bat,
      //   matchStatus: MatchStatusType.Active,
      //   firstInningsTeam: 'Team A',
      //   secondInningsTeam: 'Team B',
      //   fullMatchScore: {
      //     hostTeamInnings: {
      //       teamDetails: {
      //         teamId: 1,
      //         title: 'Team A',
      //         matchesLost: 0,
      //         matchesWon: 0,
      //         teamSquad: [
      //           'Player 1',
      //           'Player 2',
      //           'Player 3',
      //           'Player 4',
      //           'Player 5',
      //         ],
      //       },
      //       extraRuns: { legByRuns: 0, noballRuns: 0, wideRuns: 0 },
      //       currentRunRate: 0,
      //       isInningsOver: false,
      //       oversPlayed: 0,
      //       totalRuns: 0,
      //       matchAllOvers: [],
      //     },
      //     visitorTeamInnings: {
      //       teamDetails: {
      //         teamId: 1,
      //         title: 'Team A',
      //         matchesLost: 0,
      //         matchesWon: 0,
      //         teamSquad: [
      //           'Player 1',
      //           'Player 2',
      //           'Player 3',
      //           'Player 4',
      //           'Player 5',
      //         ],
      //       },
      //       currentRunRate: 0,
      //       extraRuns: { legByRuns: 0, noballRuns: 0, wideRuns: 0 },
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
