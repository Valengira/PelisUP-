import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { AppComponent } from './app.component';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/compat/auth'
import {FIREBASE_OPTIONS} from '@angular/fire/compat';

const firebaseConfig = {
  apiKey: "AIzaSyDxppUxIAEco9Cg3NM1mVfhw6Yv1hV7_Zg",
  authDomain: "desafio6-39e95.firebaseapp.com",
  projectId: "desafio6-39e95",
  storageBucket: "desafio6-39e95.appspot.com",
  messagingSenderId: "694527823136",
  appId: "1:694527823136:web:8fa8c8f809c5006a791b45",
  measurementId: "G-TD7DZW1S3D"
};
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutesModule,
    SharedModule,
    LayoutModule,
    HttpClientModule,
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    ],
  providers: [
    {provide: FIREBASE_OPTIONS, useValue: firebaseConfig}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
