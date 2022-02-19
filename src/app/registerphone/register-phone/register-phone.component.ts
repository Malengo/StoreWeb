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
  formater: String = '';

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
        Validators.pattern('^[0-9]*$'),
      ]),
      cpf: new FormControl('', [
        Validators.minLength(14),
        Validators.required,
        Validators.pattern(/^(\d{3}\.){2}\d{3}\-\d{2}$/),
      ]),
    });
  }

  addInformation() {
    this.servicePhone.addPhone(this.allphones.value);
    this.allphones.reset();
  }
  get imeiTwo() {
    return this.allphones.get('cpf')!;
  }
  get imeiOne() {
    return this.allphones.get('imeiOne')!;
  }

  maskBrazilianDoc(event: KeyboardEvent) {
    this.formater = (<HTMLInputElement>event.target).value;
    if (this.formater.length == 3) {
      this.allphones.get('cpf')?.setValue(this.formater + '.');
    }
    if (this.formater.length == 7) {
      this.allphones.get('cpf')?.setValue(this.formater + '.');
    }
    if (this.formater.length == 11) {
      this.allphones.get('cpf')?.setValue(this.formater + '-');
    }
  }
}
