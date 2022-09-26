import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from 'src/app/shared/mat-dialog/mat-dialog.component';

@Component({
  selector: 'app-active-match',
  templateUrl: './active-match.component.html',
  styleUrls: ['./active-match.component.css'],
})
export class ActiveMatchComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    // this.chooseNextBowler();
  }

  viewFullScoreboard() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '60%',
      data: { dType: 'full-scoreboard' },
      panelClass: 'dialog-common',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  chooseNextBowler() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '40%',
      data: { dType: 'next-bowler' },
      panelClass: 'dialog-common',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  openMatchAnalysis() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '60%',
      data: { dType: 'full-scoreboard' },
      panelClass: 'dialog-common',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  viewPartnerShips() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '60%',
      data: { dType: 'full-scoreboard' },
      panelClass: 'dialog-common',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  retireBatsman() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '40%',
      data: { dType: 'retire-batsman' },
      panelClass: 'dialog-common',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
