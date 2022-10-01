import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common.service';
import { MatDialogComponent } from 'src/app/shared/components/mat-dialog/mat-dialog.component';
import { Subscription } from 'rxjs';
import { TempMatch } from 'src/app/models/match.model';

@Component({
  selector: 'app-active-match',
  templateUrl: './active-match.component.html',
  styleUrls: ['./active-match.component.css'],
})
export class ActiveMatchComponent implements OnInit, OnDestroy {
  activeMatchSub: Subscription;
  activeMatch: any;
  constructor(
    public dialog: MatDialog,
    private readonly commonService: CommonService
  ) {}

  ngOnInit() {
    this.activeMatchSub = this.commonService.activeMatch.subscribe((item) => {
      this.activeMatch = item;
      if (
        this.activeMatch?.currentInnings?.batsman.length == 0 ||
        this.activeMatch?.currentInnings?.bowler.length == 0
      )
        this.chooseOpeningPlayers();
    });
  }

  viewFullScoreboard() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      data: { dType: 'full-scoreboard' },
      panelClass: ['dialog-common', 'fullscore-dialog-width'],
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  chooseNextBowler() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      data: { dType: 'next-bowler' },
      panelClass: ['dialog-common', 'forty-to-full-dialog'],
    });

    dialogRef.afterClosed().subscribe((result) => {});
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
