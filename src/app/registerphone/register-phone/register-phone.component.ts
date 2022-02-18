import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Capacity } from 'src/app/entites/enum/capacity.enum';

import { PhoneServiceService } from '../service/phone-service.service';

@Component({
  selector: 'app-register-phone',
  templateUrl: './register-phone.component.html',
  styleUrls: ['./register-phone.component.css'],
})
export class RegisterPhoneComponent implements OnInit {
  allphones!: FormGroup;
  keys = Object.values(Capacity);
  constructor(
    private servicePhone: PhoneServiceService,
    private allPhoneForm: FormBuilder
  ) {}

  ngOnInit(): void {
    this.allphones = new FormGroup({
      brand: new FormControl(),
      modelDescription: new FormControl(),
      color: new FormControl(),
      capacity: new FormControl(),
      imeiOne: new FormControl('', [
        Validators.minLength(15),
        Validators.required,
      ]),
      imeiTwo: new FormControl('', [
        Validators.minLength(15),
        Validators.required,
      ]),
    });
  }

  addInformation() {
    this.servicePhone.addPhone(this.allphones.value);
    if (this.allphones.errors) {
      console.log(this.allphones.errors);
    }
    this.allphones.reset();
  }
  get imeiTwo() {
    return this.allphones.get('imeiTwo')!;
  }

}
