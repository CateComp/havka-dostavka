import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Imported bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Imported components
import { AppComponent } from './app.component';
// Imported custom modules
import { SharedModule } from './shared/shared.module';
import { ModulesModule } from './modules/modules.module';
// Imported firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseService } from 'app/core/services/firebase.service';
<<<<<<< HEAD
// Imported Angular Google Maps
import { AgmCoreModule } from '@agm/core';
=======
// imported google maps
>>>>>>> d411eb0... added tracking

import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    SharedModule,
    ModulesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMSQKIZ7cpNU3vL-jSiAMOL0K3In9A3dQ'
    }),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
