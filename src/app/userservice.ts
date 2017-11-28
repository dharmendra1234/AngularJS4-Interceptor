import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,HttpHeaders} from '@angular/common/http';

import {Http, Headers, Response,RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { HttpClient } from "@angular/common/http";

@Injectable()
export class userservice  {
  public access_token: string;
    public refresh_token: string;


    private readonly LOGIN_URL: string = 'http://localhost:9966/api/auth/login';
    private readonly REFRESH_URL: string = 'http://localhost:9966/api/auth/token';
    private readonly ACCESS_STORAGE_KEY: string = 'accessStorage';
    private readonly REFRESH_STORAGE_KEY: string = 'refreshStorage';

 
  private url: string = "http://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

//   getUsers(){
//     return this.http.get(this.url).subscribe(res=>console.log(res));
   
//   }

  public getUsers() {
      console.log("ssdfsdf");
    this.http.get('http://jsonplaceholder.typicode.com/users')
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }

  login()  {
   
     let usercrenditional=  { "username": "svlada@gmail.com",   "password": "test1234"   };
    var headers= new Headers();   headers.append('X-Requested-With','XMLHttpRequest' );    headers.append('Content-Type','application/json' );    headers.append('Cache-Control','no-cache' );
     let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(usercrenditional);
  //  return this.http.post('http://localhost:9966/api/auth/login',body, {headers : headers} )

  return  this.http
  .post('http://localhost:9000/api/auth/login', body, {
    headers: new HttpHeaders().set('X-Requested-With','XMLHttpRequest').append('Content-Type','application/json').append('Cache-Control','no-cache')
  })
 

   .flatMap((response: Response) => {
   //    response.json;
                let recieved_access_token = response.json() && response.json().token;
                if (recieved_access_token) {
                   this.access_token = recieved_access_token;
                    var accessDetails = JSON.parse(localStorage.getItem(this.ACCESS_STORAGE_KEY));
                    localStorage.setItem(this.ACCESS_STORAGE_KEY, 'Bearer ' + this.access_token);
                     return Observable.of(true);
                } else {
                     //  this.logout();
                       return Observable.of(false);
                }
            }).subscribe( token => 
            console.log("Token " + token) );
  }

}