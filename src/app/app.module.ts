import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Imported bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Imported components
import { AppComponent } from './app.component';
// Imported custom modules
import { SharedModule } from './shared/shared.module';
import { ModulesModule } from './modules/modules.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    SharedModule,
    ModulesModule// add routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
