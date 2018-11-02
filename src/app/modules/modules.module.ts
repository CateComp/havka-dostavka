import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { TrackingComponent } from './tracking/tracking.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from 'app/modules/home/home.component';
import { CartComponent } from './cart/cart.component';
//shared
import { MenuWrapperComponent } from 'app/shared/menu-wrapper/menu-wrapper.component';
import { MenuItemComponent } from '../menu-item/menu-item.component';

//services
import { DishServiceService } from 'app/core/services/dish-service.service'
// help modules
import { AppRoutingModule } from 'app/core/app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    MenuComponent,
    NewsComponent,
    DeliveryComponent,
    TrackingComponent,
    AboutComponent,
    CartComponent,
    HomeComponent,
    MenuWrapperComponent,
    MenuItemComponent
  ],
  providers: [DishServiceService],
  exports: [MenuComponent, NewsComponent, DeliveryComponent, TrackingComponent, AboutComponent, CartComponent, HomeComponent]
})
export class ModulesModule { }
