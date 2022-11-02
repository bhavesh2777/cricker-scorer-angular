import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common.service';
import { MatDialogComponent } from 'src/app/shared/components/mat-dialog/mat-dialog.component';
import { Subscription } from 'rxjs';
import { ScoreRunDetails, TempMatch } from 'src/app/models/match.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-active-match',
  templateUrl: './active-match.component.html',
  styleUrls: ['./active-match.component.css'],
})
export class ActiveMatchComponent implements OnInit, OnDestroy {
  scoreArea: FormGroup | undefined;
  activeMatchSub: Subscription;
  activeMatch: any;
  runList = [0, 1, 2, 3, 4, 5, 6];

  get wideType(): boolean {
    return this.scoreArea.controls['wideType'].value;
  }
  get noBall(): boolean {
    return this.scoreArea.controls['noBall'].value;
  }
  get wicket(): boolean {
    return this.scoreArea.controls['wicket'].value;
  }
  get totalOvers(): number {
    const totalBalls = this.activeMatch?.currentInnings?.score?.totalBalls;
    return this.commonService.ballsToOvers(totalBalls);
  }

  constructor(
    public dialog: MatDialog,
    private readonly commonService: CommonService,
    private readonly matchService: MatchService
  ) {}

  ngOnInit() {
    this.scoreArea = new FormGroup({
      wideType: new FormControl(false),
      noBall: new FormControl(false),
      wicket: new FormControl(false),
    });

    this.activeMatchSub = this.commonService.activeMatch.subscribe((item) => {
      this.activeMatch = item;
      if (
        this.activeMatch?.currentInnings?.batsman.length == 0 ||
        this.activeMatch?.currentInnings?.bowler.length == 0
      )
        this.chooseOpeningPlayers();
      this.chooseNextBowler();
    });
  }

  scoreRuns(runScored: number) {
    const scoreRunObj: ScoreRunDetails = {
      runScored,
      wideType: this.wideType,
      noBall: this.noBall,
      wicket: this.wicket,
    };
    const scoreResult = this.matchService.scoreOneBall(scoreRunObj);
    // snackbar result
    if (scoreResult) this.commonService.openSuccessSnackbar('Scored!');
    else this.commonService.openFailureSnackbar('Failed to score run!');
  }

  viewFullScoreboard() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      data: { dType: 'full-scoreboard' },
      panelClass: ['dialog-common', 'fullscore-dialog-width'],
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  chooseNextBowler() {
    // choose if eligible to select next bowler
    const score = this.activeMatch.currentInnings.score;
    const thisOver = this.activeMatch.currentInnings.thisOver;
    const thisOverNo = this.commonService.ballsToWhichOver(score.totalBalls);
    const currOverIndex = thisOver.findIndex((el) => el.overNo === thisOverNo);
    if (currOverIndex === -1 && thisOver != 0) {
      const dialogRef = this.dialog.open(MatDialogComponent, {
        data: { dType: 'next-bowler' },
        panelClass: ['dialog-common', 'forty-to-full-dialog'],
      });
      dialogRef.afterClosed().subscribe((result) => {});
    }
  }

  chooseOpeningPlayers() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      data: { dType: 'choose-opening-players' },
      panelClass: ['dialog-common', 'forty-to-full-dialog'],
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  openMatchAnalysis() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      data: { dType: 'full-scoreboard' },
      panelClass: ['dialog-common', 'fullscore-dialog-width'],
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  viewPartnerShips() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      data: { dType: 'full-scoreboard' },
      panelClass: ['dialog-common', 'fullscore-dialog-width'],
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  retireBatsman() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      data: { dType: 'retire-batsman' },
      panelClass: ['dialog-common', 'forty-to-full-dialog'],
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  ngOnDestroy() {
    this.activeMatchSub?.unsubscribe();
  }
}
