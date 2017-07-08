import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { VideoCenterComponent } from "app/video-center/video-center.component";
import { RegisterComponent } from "app/register/register.component";
import { LoginComponent } from "app/login/login.component";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { ProfileComponent } from "app/profile/profile.component";
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'videos', component: VideoCenterComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
    {path: 'profile', component: ProfileComponent,  canActivate:[AuthGuard]}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule {}