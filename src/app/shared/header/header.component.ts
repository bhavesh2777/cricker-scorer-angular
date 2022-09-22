import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from '../mat-dialog/mat-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  nowTime: number;
  searchValue = '';
  constructor(public dialog: MatDialog) {
    setInterval(() => {
      this.nowTime = Date.now();
    }, 1);
  }

  ngOnInit(): void {}

  addPlayer(): void {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '450px',
      data: { dType: 'add-player' },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  addTeam(): void {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '250px',
      data: { dType: 'add-team' },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
