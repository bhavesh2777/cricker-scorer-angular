import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdvancedSettings } from 'src/app/models/match.model';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup | undefined;
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.settingsForm = new FormGroup({
      playersPerTeam: new FormControl(AdvancedSettings.playersPerTeam, {
        validators: [
          Validators.required,
          Validators.pattern(/^[0-9]\d*$/),
          Validators.maxLength(2),
        ],
      }),
      noBallAllow: new FormControl(AdvancedSettings.isNoBallAllowed),
      noBallReball: new FormControl({
        value: AdvancedSettings.noBallReBall,
        disabled: AdvancedSettings.isNoBallAllowed == false,
      }),
      noBallRun: new FormControl(AdvancedSettings.noBallRun, {
        validators: [
          Validators.required,
          Validators.pattern(/^[0-9]\d*$/),
          Validators.maxLength(2),
        ],
      }),
      wideBallAllow: new FormControl(AdvancedSettings.isWideBallAllowed),
      wideBallReball: new FormControl(AdvancedSettings.wideBallReBall),
      wideBallRun: new FormControl(AdvancedSettings.wideBallRun, {
        validators: [
          Validators.required,
          Validators.pattern(/^[0-9]\d*$/),
          Validators.maxLength(2),
        ],
      }),
    });
    this.settingsForm.controls['noBallAllow'].valueChanges.subscribe(
      (value) => {
        if (this.settingsForm) {
          if (!value) {
            this.settingsForm.controls['noBallReball'].setValue(value);
            this.settingsForm.controls['noBallRun'].setValue(0);
            this.settingsForm.controls['noBallReball'].disable();
            this.settingsForm.controls['noBallRun'].disable();
          } else {
            this.settingsForm.controls['noBallReball'].enable();
            this.settingsForm.controls['noBallRun'].enable();
          }
        }
      }
    );
    this.settingsForm.controls['wideBallAllow'].valueChanges.subscribe(
      (value) => {
        if (this.settingsForm) {
          if (!value) {
            this.settingsForm.controls['wideBallReball'].setValue(value);
            this.settingsForm.controls['wideBallRun'].setValue(0);
            this.settingsForm.controls['wideBallReball'].disable();
            this.settingsForm.controls['wideBallRun'].disable();
          } else {
            this.settingsForm.controls['wideBallReball'].enable();
            this.settingsForm.controls['wideBallRun'].enable();
          }
        }
      }
    );
  }

  saveSettings() {
    if (this.settingsForm?.valid) {
      const playersPerTeam = this.settingsForm.controls['playersPerTeam'].value;
      const noBallAllow = this.settingsForm.controls['noBallAllow'].value;
      const noBallReball = this.settingsForm.controls['noBallReball'].value;
      const noBallRun = this.settingsForm.controls['noBallRun'].value;
      const wideBallAllow = this.settingsForm.controls['wideBallAllow'].value;
      const wideBallReball = this.settingsForm.controls['wideBallReball'].value;
      const wideBallRun = this.settingsForm.controls['wideBallRun'].value;

      AdvancedSettings.playersPerTeam = playersPerTeam;
      AdvancedSettings.isNoBallAllowed = noBallAllow;
      AdvancedSettings.noBallReBall = noBallReball;
      AdvancedSettings.noBallRun = noBallRun;
      AdvancedSettings.isWideBallAllowed = wideBallAllow;
      AdvancedSettings.wideBallReBall = wideBallReball;
      AdvancedSettings.wideBallRun = wideBallRun;
      this.commonService.openSuccessSnackbar();
    } else {
      this.commonService.openFailureSnackbar('Please enter valid input!');
    }
  }
}
