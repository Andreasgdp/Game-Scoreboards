import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';

import { ForgotPasswordComponent } from './pages/Auth/forgot-password/forgot-password.component';
import { SignInComponent } from './pages/Auth/sign-in/sign-in.component';
import { SignUpComponent } from './pages/Auth/sign-up/sign-up.component';
import { VerifyEmailComponent } from './pages/Auth/verify-email/verify-email.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { SettingsComponent } from '@pages/settings/settings.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
