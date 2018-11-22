import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearhComponent } from './searh/searh.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  // [,deklə'reiʃənz] 声明
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearhComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent
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
