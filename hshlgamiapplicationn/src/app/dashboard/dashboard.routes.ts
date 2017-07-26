import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Home2Component } from './home/home.component';
import { UserComponent } from './user/user.component';
import { IconsComponent } from './icons/icons.component';
import { TableComponent } from './table/table.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TypographyComponent } from './typography/typography.component';
import { MapsComponent } from './maps/maps.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { HomeComponent } from "app/home/home.component";
import { VideoCenterComponent } from "app/video-center/video-center.component";
import { RegisterComponent } from "app/register/register.component";
import { LoginComponent } from "app/login/login.component";
import { AuthGuard } from "app/guards/auth.guard";
import { ProfileComponent } from "app/profile/profile.component";

export const MODULE_ROUTES: Route[] =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'dashboard', component: Home2Component, canActivate:[AuthGuard] },
        { path: 'profile/dashboard', component: Home2Component, canActivate:[AuthGuard] },

    { path: 'profile/user', component: UserComponent },
    { path: 'profile/table', component: TableComponent },
    { path: 'profile/icons', component: IconsComponent },
    { path: 'profile/notifications', component: NotificationsComponent },
    { path: 'profile/typography', component: TypographyComponent },
    { path: 'profile/maps', component: MapsComponent },
    { path: 'profile/upgrade', component: UpgradeComponent },
    { path: 'home', component: HomeComponent},
    { path: 'videos', component: VideoCenterComponent },
    { path: 'register', component: RegisterComponent },
    {path: 'login', component: LoginComponent},
//    {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
    {path: 'profile', component: ProfileComponent,  canActivate:[AuthGuard]}
]

export const MODULE_COMPONENTS = [
    Home2Component,
    UserComponent,
    TableComponent,
    IconsComponent,
    NotificationsComponent,
    TypographyComponent,
    MapsComponent,
    UpgradeComponent]
