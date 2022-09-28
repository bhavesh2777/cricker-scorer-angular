import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from 'src/app/shared/mat-dialog/mat-dialog.component';

@Component({
  selector: 'app-match-list-card',
  templateUrl: './match-list-card.component.html',
  styleUrls: ['./match-list-card.component.css'],
})
export class MatchListCardComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  viewFullScoreboard() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      data: { dType: 'full-scoreboard' },
      panelClass: ['dialog-common', 'fullscore-dialog-width'],
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  deleteMatch() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '450px',
      data: { dType: 'delete-match' },
      panelClass: 'dialog-common',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
