import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/connexion/login/login.component';
import { RegisterComponent } from './components/connexion/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SolutionComponent } from './components/solution/solution.component';
import { PasswordRecoveryComponent } from './components/connexion/password-recovery/password-recovery.component';
import { ArchiveComponent } from './components/sidebar/archive/archive.component';
import { CorbeilleComponent } from './components/sidebar/corbeille/corbeille.component';
import { SommissionsComponent } from './components/sidebar/sommissions/sommissions.component';
import { HomeComponent } from './components/sidebar/home/home.component';  // Assurez-vous d'importer le HomeComponent
import { app } from '../../server';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: 'corbeille', component: CorbeilleComponent },
  { path: 'sommissions', component: SommissionsComponent },
  { path: 'solution', component: SolutionComponent },
  { path: 'password-recovery', component: PasswordRecoveryComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
