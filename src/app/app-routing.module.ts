import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { CreateWorkoutPageComponent } from './pages/create-workout-page/create-workout-page.component';
import { ViewWorkoutsPageComponent } from './pages/view-workouts-page/view-workouts-page.component';
import { ViewSingleWorkoutPageComponent } from './pages/view-single-workout-page/view-single-workout-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'createWorkout', component: CreateWorkoutPageComponent },
  { path: 'workouts', component: ViewWorkoutsPageComponent },
  { path: 'workout/:id', component: ViewSingleWorkoutPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
