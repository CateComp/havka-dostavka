import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from 'app/modules/menu/menu.component';
import { NewsComponent } from 'app/modules/news/news.component';
import { DeliveryComponent } from 'app/modules/delivery/delivery.component';
import { TrackingComponent } from 'app/modules/tracking/tracking.component';
import { AboutComponent } from 'app/modules/about/about.component';
import { HomeComponent } from 'app/modules/home/home.component';
import { CartComponent } from 'app/modules/cart/cart.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'news', component: NewsComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'tracking', component: TrackingComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
