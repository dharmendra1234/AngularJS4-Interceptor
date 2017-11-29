import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';

import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { HttpClient } from "@angular/common/http";
import { Token } from "app/token";

@Injectable()
export class userservice {
  results: any;

  constructor(private http: HttpClient) { }

  getToken() {
    let usercrenditional = { "username": "svlada@gmail.com", "password": "test1234" };
    let body = JSON.stringify(usercrenditional);
    this.http.post('http://localhost:9000/api/auth/login', body)
      .map((response: Token) => {
        localStorage.setItem('token', 'Bearer ' + response.token);
        localStorage.setItem('refreshToken', 'Bearer ' + response.refreshToken);
      }).subscribe();
  }


  checkServicewithToekn() {
    this.http.get('http://localhost:9999/api/greeting/').subscribe(data => {
      this.results = data['results'];
    });
  }

}
