import { Component } from '@angular/core';
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';

@Component({
  moduleId: module.id,    
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
    location: Location;
    constructor(location:Location) {
        this.location = location;
    }
    public isMaps(path){
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice( 1 );
        if(path == titlee){
            return false;
        }
        else {
            return true;
        }
    }
}
