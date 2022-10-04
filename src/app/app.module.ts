import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './shared/services/auth.service';

import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { connectAuthEmulator, getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {
  connectDatabaseEmulator,
  getDatabase,
  provideDatabase,
} from '@angular/fire/database';
import {
  connectFirestoreEmulator,
  Firestore,
  getFirestore,
  initializeFirestore,
  provideFirestore,
} from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { LandingComponent } from './pages/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    ToastModule,
    FormsModule,
    MenubarModule,
    InputTextModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => {
      const auth = getAuth();
      if (environment.useEmulators) {
        connectAuthEmulator(auth, 'http://localhost:9099', {
          disableWarnings: true,
        });
      }
      return auth;
    }),
    provideDatabase(() => {
      const db = getDatabase();
      if (environment.useEmulators) {
        connectDatabaseEmulator(db, 'localhost', 9000, {
          mockUserToken: 'test',
        });
      }
      return db;
    }),
    provideFirestore(() => {
      let firestore: Firestore;
      if (environment.useEmulators) {
        // Long polling required for Cypress
        firestore = initializeFirestore(getApp(), {
          experimentalForceLongPolling: true,
        });
        connectFirestoreEmulator(firestore, 'localhost', 8080);
      } else {
        firestore = getFirestore();
      }
      return firestore;
    }),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
