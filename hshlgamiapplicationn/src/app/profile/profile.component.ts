import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']  

})
export class ProfileComponent implements OnInit {  
  students: Object;
  constructor(private authService:AuthService,  private router:Router) { }

  ngOnInit() {  
    let students= JSON.parse(localStorage.getItem('students'));
    this.authService.gettProfile().subscribe(profile => {
      this.students= students;
    
  },
  err => {
    console.log(err);
    return false;
  });  
  //this.router.navigate(['/typography']);

}          

}
