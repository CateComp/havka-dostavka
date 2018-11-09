import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Imported bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Imported components
import { AppComponent } from './app.component';
// Imported custom modules
import { SharedModule } from './shared/shared.module';
import { ModulesModule } from './modules/modules.module';
<<<<<<< Updated upstream
=======
// Imported firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseService } from 'app/core/services/firebase.service';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
>>>>>>> Stashed changes

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    SharedModule,
    ModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
