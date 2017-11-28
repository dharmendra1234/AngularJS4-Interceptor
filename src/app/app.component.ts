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
   public access_token: string;
    public refresh_token: string;


    private readonly LOGIN_URL: string = 'http://localhost:9966/api/auth/login';
    private readonly REFRESH_URL: string = 'http://localhost:9966/api/auth/token';
    private readonly ACCESS_STORAGE_KEY: string = 'accessStorage';
    private readonly REFRESH_STORAGE_KEY: string = 'refreshStorage';
  title = 'app';
results: string[];
constructor(private http: HttpClient)
{

} 


ngOnInit(): void {    
    this.http.get('http://localhost:9000/api/hello-world').subscribe(data => {
      this.results = data['results'];
    });


    let usercrenditional=  { "username": "svlada@gmail.com",   "password": "test1234"   };
  //  var headers= new Headers();   headers.append('X-Requested-With','XMLHttpRequest' );    headers.append('Content-Type','application/json' );    headers.append('Cache-Control','no-cache' );
     let body = JSON.stringify(usercrenditional);
 

    this.http
  .post('http://localhost:9000/api/auth/login', body, {
    headers: new HttpHeaders().set('X-Requested-With','XMLHttpRequest').append('Content-Type','application/json').append('Cache-Control','no-cache')
  })
    .flatMap((response: Token) => {
          localStorage.setItem(this.ACCESS_STORAGE_KEY, 'Bearer ' + response.token);
     console.log(JSON.stringify(response));
            return Observable.of(true);
      
            }).subscribe( token => 
            console.log("Token " + token) );
  }
}
