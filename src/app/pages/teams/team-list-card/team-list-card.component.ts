import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from 'src/app/shared/mat-dialog/mat-dialog.component';

@Component({
  selector: 'app-team-list-card',
  templateUrl: './team-list-card.component.html',
  styleUrls: ['./team-list-card.component.css'],
})
export class TeamListCardComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  editTeam(event: any, isDelete = false) {
    event.stopPropagation();
    event.preventDefault();
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '450px',
      data: { dType: 'team-edit', isDelete },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
