import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogType } from 'src/app/models/common-dialog.model';

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.css'],
})
export class MatDialogComponent implements OnInit {
  enteredPlayerName = '';
  enteredTeamName = '';
  nextBowler = '';
  replacedBatsman = '';
  playerFile: File | null = null;
  teamFile: File | null = null;

  constructor(
    public dialogRef: MatDialogRef<MatDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogType
  ) {}

  ngOnInit(): void {}

  uploadPlayerImg(files: FileList) {
    this.playerFile = files?.item(0);
  }

  uploadTeamImg(files: FileList) {
    this.teamFile = files?.item(0);
  }
}
