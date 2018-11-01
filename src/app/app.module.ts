import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from 'app/shared/layout/footer/footer.component';
import { HeaderComponent } from 'app/shared/layout/header/header.component';
import { HomeComponent } from './modules/home/home.component';
import { MenuComponent } from './modules/menu/menu.component';
import { NewsComponent } from './modules/news/news.component';
import { DeliveryComponent } from './modules/delivery/delivery.component';
import { TrackingComponent } from './modules/tracking/tracking.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { CartComponent } from './modules/cart/cart.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'news', component: NewsComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'tracking', component: TrackingComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'cart', component: CartComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    NewsComponent,
    DeliveryComponent,
    TrackingComponent,
    AboutUsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),// add routes
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
