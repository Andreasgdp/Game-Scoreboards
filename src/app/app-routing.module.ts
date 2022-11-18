import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';

import { LandingGuard } from '@guards/landing.guard';
import { GamesComponent } from '@pages/games/games.component';
import { SettingsComponent } from '@pages/settings/settings.component';
import { ForgotPasswordComponent } from './pages/Auth/forgot-password/forgot-password.component';
import { SignInComponent } from './pages/Auth/sign-in/sign-in.component';
import { SignUpComponent } from './pages/Auth/sign-up/sign-up.component';
import { VerifyEmailComponent } from './pages/Auth/verify-email/verify-email.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: LandingComponent, canActivate: [LandingGuard] },
  { path: 'sign-in', component: SignInComponent, canActivate: [LandingGuard] },
  {
    path: 'register-user',
    component: SignUpComponent,
    canActivate: [LandingGuard],
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [LandingGuard],
  },
  {
    path: 'verify-email-address',
    component: VerifyEmailComponent,
    canActivate: [LandingGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'games', component: GamesComponent, canActivate: [AuthGuard] },
  { path: 'games/:id', component: GamesComponent, canActivate: [AuthGuard] },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard],
  },
  //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
