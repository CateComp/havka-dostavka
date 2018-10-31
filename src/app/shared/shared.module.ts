import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Custom components
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  exports: [ LayoutComponent]
})
export class SharedModule { }
