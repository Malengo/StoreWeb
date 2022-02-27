import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
  ];
  constructor(private servicePhone: PhoneServiceService) {
     this.smartphone = this.servicePhone.allphone();
  }

  ngOnInit(): void {}
}
