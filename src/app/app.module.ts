import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS,HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NoopInterceptor } from "app/NoopInterceptor";
import { userservice } from "app/userservice";
import { HttpModule } from "@angular/http/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: NoopInterceptor,
    multi: true,
  },userservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
  
