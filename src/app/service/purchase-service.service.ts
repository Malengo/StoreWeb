import { Observable } from 'rxjs';
import { Purchase } from './../models/entites/purchase';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseServiceService {

  private readonly API = 'https://localhost:7070/api/vendas';

  constructor(private httpclient: HttpClient) { }

  addpurchase(purchase: Purchase): Observable<Purchase>{
    return this.httpclient.post<Purchase>(this.API, purchase)
  }
}
