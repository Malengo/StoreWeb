import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Smartphone } from './../models/entites/smartphone';

@Component({
  selector: 'app-alterphone',
  templateUrl: './alterphone.component.html',
  styleUrls: ['./alterphone.component.css'],
})
export class AlterphoneComponent implements OnInit {

  buttonName: string = 'Alterar';

  constructor(
    public dialogRef: MatDialogRef<AlterphoneComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: Smartphone
  ) {}

  ngOnInit(): void {}

  closed(){

    this.dialogRef.close();
  }
}
