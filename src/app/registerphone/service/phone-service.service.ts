import { Smartphone } from './../../smartphones/model/entites/smartphone';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhoneServiceService {
  smartphone: Smartphone[] = [];
  constructor() {}

  addPhone(phone: Smartphone) {
     this.smartphone.push(phone);


  }
  allphone(): Smartphone[] {

   return  this.smartphone;
  }
}
