import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FooterComponent } from 'app/shared/layout/footer/footer.component';
import { HeaderComponent } from 'app/shared/layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()// add routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
