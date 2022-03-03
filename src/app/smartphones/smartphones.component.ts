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
  fail: boolean | undefined;
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
    this.smartphone.subscribe({
      next: (v) => console.info(v),
      error: (e) => {
        this.fail = false;
      },
      complete: () => console.log('Ok'),
    });
  }

  ngOnInit(): void {
    this.fail = true;
  }

  openDialog(phone: Smartphone) {
    this.dialog.open(AlterphoneComponent, {
      data: phone,
    });
  }


  deletePhone(phone: Smartphone) {
    this.servicePhone.delete(phone).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.log(e),
      complete: () => (this.smartphone = this.servicePhone.allphone()),
    });
  }
}
