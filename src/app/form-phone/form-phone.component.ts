import { Smartphone } from './../models/entites/smartphone';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Capacity } from '../models/entites/enum/capacity.enum';
import { Memory } from '../models/entites/enum/Memory.enum';
import { PhoneServiceService } from '../service/phone-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AlterphoneComponent } from '../alterphone/alterphone.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-phone',
  templateUrl: './form-phone.component.html',
  styleUrls: ['./form-phone.component.css'],
})
export class FormPhoneComponent implements OnInit {
  @Input() data!: Smartphone;
  @Input() button!: string;
  @Input() dialog!: MatDialogRef<AlterphoneComponent>;
  allphones!: FormGroup;
  keys = Object.values(Capacity);
  keysMemory = Object.values(Memory);

  constructor(
    private servicePhone: PhoneServiceService,
    private message: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.allphones = new FormGroup({
      id: new FormControl(),
      brand: new FormControl(),
      modelDescription: new FormControl(),
      color: new FormControl(),
      capacity: new FormControl(),
      memory: new FormControl(),
      imeiOne: new FormControl('', [
        Validators.minLength(15),
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      imeiTwo: new FormControl('', [
        Validators.minLength(14),
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
    });
    if (this.data) {
      this.id?.setValue(this.data.id);
      this.brand.setValue(this.data.brand);
      this.modelDescription.setValue(this.data.modelDescription);
      this.color.setValue(this.data.color);
      this.capacity.setValue(this.data.capacity);
      this.memory.setValue(this.data.memory);
      this.imeiOne.setValue(this.data.imeiOne);
      this.imeiTwo.setValue(this.data.imeiTwo);
    } else {
      this.id?.setValue(0);
    }
  }
  get id() {
    return this.allphones.get('id');
  }
  get brand() {
    return this.allphones.get('brand')!;
  }
  get modelDescription() {
    return this.allphones.get('modelDescription')!;
  }
  get color() {
    return this.allphones.get('color')!;
  }
  get capacity() {
    return this.allphones.get('capacity')!;
  }
  get memory() {
    return this.allphones.get('memory')!;
  }
  get imeiTwo() {
    return this.allphones.get('imeiTwo')!;
  }
  get imeiOne() {
    return this.allphones.get('imeiOne')!;
  }

  changePhone() {
    switch (this.button) {
      case 'Cadastrar':
        this.servicePhone.addPhone(this.allphones.value).subscribe({
          next: (v) => console.log(v),
          error: (e) => {
            this.openMessage('Erro ao Cadastrar');
            console.error(e);
          },
          complete: () => {
            this.openMessage('Cadastro Realizado com sucesso');
            console.info('OK');
          },
        });
        this.allphones.reset();
        break;

      case 'Alterar':
        this.servicePhone.alterPhone(this.allphones.value).subscribe({
          next: (v) => console.log(v),
          error: (e) => {
            console.log(e);
            this.openMessage('Erro ao alterar a informação');
          },
          complete: () => {
            this.openMessage('Alteração Realizada com sucesso');
            this.closeForm();
            window.location.reload();
          },
        });

        break;
    }
  }

  openMessage(message: string) {
    this.message.open(message, 'Fechar mensagem', {
      duration: 3000,
    });
  }

  closeForm() {
    this.dialog.close();
  }
}
