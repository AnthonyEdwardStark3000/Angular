import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AngularFireModule } from "@angular/fire/compat";
// import { AngularFirestore } from '@angular/fire/compat/firestore';
import { environment } from './../environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { from } from 'rxjs';
// import { FormsModule } from '@angular/forms';
// import { environment } from '../environments/environment';
// import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
// import { provideAuth,getAuth } from '@angular/fire/auth';
// import { provideDatabase,getDatabase } from '@angular/fire/database';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';
// import { provideFunctions,getFunctions } from '@angular/fire/functions';
// import { provideMessaging,getMessaging } from '@angular/fire/messaging';
// import { providePerformance,getPerformance } from '@angular/fire/performance';
// import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
// import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    // FormsModule,
    BrowserModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAnalytics(() => getAnalytics()),
    // provideAuth(() => getAuth()),
    // provideDatabase(() => getDatabase()),
    // provideFirestore(() => getFirestore()),
    // provideFunctions(() => getFunctions()),
    // provideMessaging(() => getMessaging()),
    // providePerformance(() => getPerformance()),
    // provideRemoteConfig(() => getRemoteConfig()),
    // provideStorage(() => getStorage()),
    // AngularFirestore
  ],
  providers: [
    // ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }