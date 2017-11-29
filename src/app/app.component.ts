import { Component, OnInit } from '@angular/core';
import { userservice } from "app/userservice";
import { HttpClient } from "@angular/common/http";
import { RequestOptions } from "@angular/http/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Token } from "app/token";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit {

  title = 'app';

  constructor(private http: HttpClient, private userservice: userservice) {
    this.userservice.getToken();
  }

  ngOnInit(): void {
    this.userservice.checkServicewithToekn();
  }

}
