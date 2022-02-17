import { PhoneServiceService } from './../../registerphone/service/phone-service.service';
import { Smartphone } from './../model/entites/smartphone';
import { Component, OnInit } from '@angular/core';

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
