import { PhoneServiceService } from './../../registerphone/service/phone-service.service';

import { Component, OnInit } from '@angular/core';
import { Smartphone } from 'src/app/entites/smartphone';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css'],
})
export class SmartphonesComponent implements OnInit {
  smartphone: Smartphone[] = [];
  displayedColumns = [
    'brand',
    'modelDescription',
    'color',
    'capacity',
    'imeiOne',
    'imeiTwo',
  ];
  constructor(private servicePhone: PhoneServiceService) {}

  ngOnInit(): void {
    this.smartphone = this.servicePhone.allphone();
  }
}
