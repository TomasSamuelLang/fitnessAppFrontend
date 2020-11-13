import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateWorkoutPageComponent } from './pages/create-workout-page/create-workout-page.component';
import { ViewWorkoutsPageComponent } from './pages/view-workouts-page/view-workouts-page.component';
import { ViewSingleWorkoutPageComponent } from './pages/view-single-workout-page/view-single-workout-page.component';
import { LogWorkoutActivityPageComponent } from './pages/log-workout-activity-page/log-workout-activity-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatGridListModule,
  MatDividerModule,
  MatListModule,
  MatCardModule,
  MatOptionModule,
  MatTableModule,
  MatSelectModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './pages/login-page/auth.service';
import { RegisterService } from './pages/register-page/register-page.service';
import { HomePageService } from './pages/home-page/home-page.service';
import { WorkoutService } from './services/workout.service';
import { AuthGuard } from './services/auth-guard.service';
import { CdkColumnDef } from '@angular/cdk/table';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NavigationComponent,
    FooterComponent,
    CreateWorkoutPageComponent,
    ViewWorkoutsPageComponent,
    ViewSingleWorkoutPageComponent,
    LogWorkoutActivityPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
  ],
  providers: [
    RegisterService,
    HomePageService,
    AuthService,
    WorkoutService,
    AuthGuard,
    CdkColumnDef,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
