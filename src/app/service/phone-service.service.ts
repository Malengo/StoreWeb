import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Smartphone } from '../models/entites/smartphone';

@Injectable({
  providedIn: 'root',
})
export class PhoneServiceService {
  private readonly API = 'https://localhost:7070/api/smartphone';

  constructor(private httpclient: HttpClient) {}

  addPhone(phone: Smartphone) {
    this.httpclient.post<Smartphone>(this.API, phone).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('OK'),
    });
  }

  allphone() {
    return this.httpclient.get<Smartphone[]>(this.API);
  }

  alterPhone(phone: Smartphone): Observable<Smartphone> {
    return this.httpclient.put<Smartphone>(`${this.API}/${phone.id}`, phone);
  }
}
