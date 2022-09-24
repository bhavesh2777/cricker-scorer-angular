import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from 'src/app/shared/mat-dialog/mat-dialog.component';

@Component({
  selector: 'app-player-list-card',
  templateUrl: './player-list-card.component.html',
  styleUrls: ['./player-list-card.component.css'],
})
export class PlayerListCardComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  playerDetails(): void {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: 'max-content',
      data: { dType: 'player-details' },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  editPlayer(event: any, isDelete = false) {
    event.stopPropagation();
    event.preventDefault();
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '450px',
      data: { dType: 'player-edit', isDelete },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
