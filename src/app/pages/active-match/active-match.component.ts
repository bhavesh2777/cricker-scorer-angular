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

  ngOnInit(): void {}

  viewFullScoreboard() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '60%',
      data: { dType: 'full-scoreboard' },
      panelClass: 'dialog-common',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
