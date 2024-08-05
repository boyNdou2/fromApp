import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  LoginComponent } from './components/connexion/login/login.component';
import { RegisterComponent } from './components/connexion/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SolutionComponent } from './components/solution/solution.component';
import { PasswordRecoveryComponent } from './components/connexion/password-recovery/password-recovery.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ArchiveComponent } from './components/sidebar/archive/archive.component';
import { CorbeilleComponent } from './components/sidebar/corbeille/corbeille.component';
import { SommissionsComponent } from './components/sidebar/sommissions/sommissions.component';
import { HomeComponent } from './components/sidebar/home/home.component';
import { CreateFormDialogComponent } from './components/sidebar/create-form-dialog/create-form-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EquipeDialogComponent } from './components/sidebar/equipe-dialog/equipe-dialog.component';
import { ContainerComponent } from './components/container/container.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    SolutionComponent,
    PasswordRecoveryComponent,
    ArchiveComponent,
    CorbeilleComponent,
    SommissionsComponent,
    HomeComponent,
    CreateFormDialogComponent,
    EquipeDialogComponent,
    ContainerComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
