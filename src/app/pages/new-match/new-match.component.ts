import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { storedTeamsArr } from 'src/app/constants/global';
import { Team } from 'src/app/models/team.model';

@Component({
  selector: 'app-new-match',
  templateUrl: './new-match.component.html',
  styleUrls: ['./new-match.component.css'],
})
export class NewMatchComponent implements OnInit {
  newMatch: FormGroup;
  teamArr: Team[] = [];

  constructor() {}

  ngOnInit() {
    this.teamArr = storedTeamsArr;
    this.newMatch = new FormGroup({
      hostTeam: new FormControl(this.teamArr[0].teamId, {
        validators: [Validators.required],
      }),
      visitorTeam: new FormControl(this.teamArr[1].teamId, {
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
      console.log('SUBMIT');
    }
  }
}
