import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/models/data-model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CustDataService {
  url = 'http://localhost:3000/Customer';

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url, {responseType: 'json'});
  }

  /* addCustomers(customer: Customer[]): Observable<Customer[]> {
      return this.http.put(url, customer, httpOptions);
  } */
  constructor(private http: HttpClient) {
  }
}
