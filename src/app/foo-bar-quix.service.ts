import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Result} from './model/result';

@Injectable({
  providedIn: 'root'
})
export class FooBarQuixService {

  private readonly convertUrl: string;

  constructor(private http: HttpClient) {
    this.convertUrl = 'http://localhost:8080//foo-bar-quix';
  }

  public getConvertedNumber(inputNumber: string): Observable<Result>{

    const httpOptionsGet = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      })
    };

    const url = `${this.convertUrl}/${inputNumber}`;

    return this.http.get<Result>(url, httpOptionsGet);
  }

}
