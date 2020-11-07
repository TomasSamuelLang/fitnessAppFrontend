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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
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
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './pages/login-page/login-page.service';
import { RegisterService } from './pages/register-page/register-page.service';
import { WorkoutService } from './services/workout.service';

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
    ReactiveFormsModule,
    MatListModule,
    MatCardModule
  ],
  providers: [
    RegisterService,
    WorkoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
