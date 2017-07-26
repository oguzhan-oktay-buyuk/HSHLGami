import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeComponent } from "app/home/home.component";
import { VideoCenterComponent } from "app/video-center/video-center.component";
import { RegisterComponent } from "app/register/register.component";
import { ProfileComponent } from "app/profile/profile.component";
import { LoginComponent } from "app/login/login.component";
import { FormsModule } from '@angular/forms';
import { SafePipe } from "app/safe.pipe";
import { NavbarComponent } from "app/navbar/navbar.component";
import { VideoListComponent } from "app/video-list/video-list.component";
import { VideoDetailComponent } from "app/video-detail/video-detail.component";
import { FlashMessagesModule } from "angular2-flash-messages/module";
import { VideoService } from "app/services/video.service";
import { AuthGuard } from "app/guards/auth.guard";
import { AuthService } from "app/services/auth.service";
import { ValidateService } from "app/services/validate.service";
import { CommonModule } from '@angular/common';

@NgModule({
    imports:      [
        BrowserModule,
        DashboardModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        FormsModule,
        HttpModule,
        FlashMessagesModule,
        CommonModule,
        RouterModule.forRoot([])
    ],
    declarations: [ AppComponent, DashboardComponent, HomeComponent, VideoCenterComponent, RegisterComponent, 
        LoginComponent, ProfileComponent,NavbarComponent,SafePipe,
        VideoListComponent, VideoDetailComponent
],
    providers: [ValidateService, AuthService, AuthGuard, VideoService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
