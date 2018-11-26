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
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { ProductService } from './shared/product.service';

@NgModule({
  // [,deklə'reiʃənz] 声明
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearhComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //  [prə'vaɪdə] 供应者
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
