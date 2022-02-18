
import { Injectable } from '@angular/core';
import { Smartphone } from 'src/app/entites/smartphone';

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
