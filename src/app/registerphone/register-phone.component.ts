import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Capacity } from '../models/entites/enum/capacity.enum';
import { Memory } from '../models/entites/enum/Memory.enum';


import { PhoneServiceService } from '../service/phone-service.service';

@Component({
  selector: 'app-register-phone',
  templateUrl: './register-phone.component.html',
  styleUrls: ['./register-phone.component.css'],
})
export class RegisterPhoneComponent implements OnInit {

buttonName: string;
  constructor() {
    this.buttonName = 'Cadastrar';
  }

  ngOnInit(): void {}
}
