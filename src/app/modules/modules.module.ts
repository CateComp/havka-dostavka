import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from 'app/modules/menu/menu.component';
import { NewsComponent } from 'app/modules/news/news.component';
import { DeliveryComponent } from 'app/modules/delivery/delivery.component';
import { TrackingComponent } from 'app/modules/tracking/tracking.component';
import { AboutComponent } from 'app/modules/about/about.component';
import { HomeComponent } from 'app/modules/home/home.component';
import { CartComponent } from 'app/modules/cart/cart.component';
// shared
import { MenuWrapperComponent } from 'app/shared/menu-wrapper/menu-wrapper.component';
import { MenuItemComponent } from 'app/shared/menu-item/menu-item.component';

// services
import { DishService } from 'app/core/services/dish.service';
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
  providers: [DishService],
  exports: [MenuComponent, NewsComponent, DeliveryComponent, TrackingComponent, AboutComponent, CartComponent, HomeComponent]
})
export class ModulesModule { }
