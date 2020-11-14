import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { CreateWorkoutPageComponent } from './pages/create-workout-page/create-workout-page.component';
import { ViewWorkoutsPageComponent } from './pages/view-workouts-page/view-workouts-page.component';
import { ViewSingleWorkoutPageComponent } from './pages/view-single-workout-page/view-single-workout-page.component';
import { AuthGuard } from './services/auth-guard.service';
import { LogWorkoutActivityPageComponent } from './pages/log-workout-activity-page/log-workout-activity-page.component';
import { EditSingleWorkoutComponent } from './pages/edit-single-workout/edit-single-workout.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'createWorkout', component: CreateWorkoutPageComponent, canActivate: [AuthGuard] },
  { path: 'workouts', component: ViewWorkoutsPageComponent, canActivate: [AuthGuard] },
  { path: 'workouts/:id', component: ViewSingleWorkoutPageComponent },
  { path: 'logs', component: LogWorkoutActivityPageComponent, canActivate: [AuthGuard] },
  { path: 'workouts/:id/edit', component: EditSingleWorkoutComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
