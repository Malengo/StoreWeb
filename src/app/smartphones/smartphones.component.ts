import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { AlterphoneComponent } from '../alterphone/alterphone.component';
import { Smartphone } from '../models/entites/smartphone';
import { PhoneServiceService } from '../service/phone-service.service';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css'],
})
export class SmartphonesComponent implements OnInit {
  smartphone: Observable<Smartphone[]>;
  displayedColumns = [
    'brand',
    'modelDescription',
    'color',
    'capacity',
    'memory',
    'imeiOne',
    'imeiTwo',
    'changeButton',
  ];
  constructor(
    private servicePhone: PhoneServiceService,
    public dialog: MatDialog
  ) {
    this.smartphone = this.servicePhone.allphone();
  }

  ngOnInit(): void {}

  openDialog(phone: Smartphone) {
    const dialogRef = this.dialog.open(AlterphoneComponent, {
      data: phone,
    });
  }
}
