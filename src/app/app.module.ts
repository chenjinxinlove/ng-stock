import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  // [,deklə'reiʃənz] 声明
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //  [prə'vaɪdə] 供应者
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
