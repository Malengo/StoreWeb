import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Smartphone } from 'src/app/entites/smartphone';

@Injectable({
  providedIn: 'root',
})
export class PhoneServiceService {
  private readonly API = 'https://localhost:7070/api/smartphone';

  constructor(private httpclient: HttpClient) {}

  addPhone(phone: Smartphone) {
    this.httpclient.post<Smartphone>(this.API, phone).subscribe(
      (resultado) => {
        console.log(resultado);
      },
      (erro) => {
        if (erro.status == 400) {
          console.log(erro);
        } else {
          console.log('Foi');
        }
      }
    );
    console.log(phone);
  }

  allphone() {
    return this.httpclient.get<Smartphone[]>(this.API);
  }
}
