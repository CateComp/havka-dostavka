import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Custom components
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';

import { AppRoutingModule  } from 'app/core/app-routing/app-routing.module';



@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  exports: [ LayoutComponent]
})
export class SharedModule { }
