import { PhoneServiceService } from './../../registerphone/service/phone-service.service';

import { Component, OnInit } from '@angular/core';
import { Smartphone } from 'src/app/entites/smartphone';
import { Observable } from 'rxjs';

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
  ];
  constructor(private servicePhone: PhoneServiceService) {
     this.smartphone = this.servicePhone.allphone();
  }

  ngOnInit(): void {}
}
