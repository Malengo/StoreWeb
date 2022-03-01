import { Component, OnInit } from '@angular/core';

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
