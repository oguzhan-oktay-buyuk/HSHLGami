import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from 'app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AppComponent } from "app/app.component";
import { HomeComponent } from "app/home/home.component";
import { VideoCenterComponent } from "app/video-center/video-center.component";
import { VideoListComponent } from "app/video-list/video-list.component";
import { VideoDetailComponent } from "app/video-detail/video-detail.component";

import { RegisterComponent } from './register/register.component';
import { SafePipe } from './safe.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { VideoService } from "app/services/video.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoCenterComponent,
    VideoListComponent,
    VideoDetailComponent,
    SafePipe,
    RegisterComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
