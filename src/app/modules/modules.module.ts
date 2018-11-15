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
import { LoginComponent } from './login/login.component';
import { MenuPipe } from 'app/core/pipes/menu.pipe';
import { FormsModule } from '@angular/forms';
import { AdminPageComponent } from 'app/modules/admin-page/admin-page.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
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
    MenuItemComponent,
    LoginComponent,
    MenuPipe,
    AdminPageComponent
  ],
  providers: [DishService],
  exports: [MenuComponent, NewsComponent, DeliveryComponent, TrackingComponent, AboutComponent, CartComponent, HomeComponent]
})
export class ModulesModule { }
