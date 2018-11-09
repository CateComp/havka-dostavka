import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { TrackingComponent } from './tracking/tracking.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from 'app/modules/home/home.component';
import { CartComponent } from './cart/cart.component';

import { AppRoutingModule } from 'app/core/app-routing/app-routing.module';
<<<<<<< Updated upstream
=======
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
>>>>>>> Stashed changes

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [MenuComponent, NewsComponent, DeliveryComponent, TrackingComponent, AboutComponent, CartComponent, HomeComponent],
  exports: [MenuComponent, NewsComponent, DeliveryComponent, TrackingComponent, AboutComponent, CartComponent, HomeComponent]
})
export class ModulesModule { }
