import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Capacity } from 'src/app/smartphones/model/entites/enum/capacity.enum';

import { PhoneServiceService } from '../service/phone-service.service';

@Component({
  selector: 'app-register-phone',
  templateUrl: './register-phone.component.html',
  styleUrls: ['./register-phone.component.css'],
})
export class RegisterPhoneComponent implements OnInit {
  allphones: FormGroup;
  capacityList = Capacity;

  constructor(
    private servicePhone: PhoneServiceService,
    private allPhoneForm: FormBuilder
  ) {
    this.allphones = this.allPhoneForm.group({
      brand: [null],
      modelDescription: [null],
      color: [null],
      capacity: [null],
      imeiOne: [null],
      imeiTwo: [null],
    });
  }

  ngOnInit(): void {
    console.log(this.capacityList);
  }

  addInformation() {
    this.servicePhone.addPhone(this.allphones.value);
    this.allphones.reset();
  }
}
