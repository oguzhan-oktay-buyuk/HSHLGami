import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    name: String;
    surname: String;
    email: String;    
    password: String;
    address: String;
    phoneNumber: String;
    points: String;
  constructor(private validateService: ValidateService, 
              private flashMessage:FlashMessagesService,
              private authService:AuthService,
              private router:Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const students ={
      name: this.name,
      surname: this.surname,
      email: this.email,    
      password: this.password,
      address: this.address,
      phoneNumber: this.phoneNumber,
      points: '0'
  }
  //Required Fieleds
  if(!this.validateService.validateRegister(students)){
    this.flashMessage.show('Please fill in all fields.', {cssClass: 'alert-danger', timeout: 3000});
    return false;
  }
  

   //Validate email
  if(!this.validateService.validateEmail(students.email)){
    this.flashMessage.show('Please use a valid email.', {cssClass: 'alert-danger', timeout: 3000});
    return false;
  }
    //Register Student
    this.authService.registerStudents(students).subscribe(data => {
      if(data.success){
            this.flashMessage.show('You are now registered and can log in.', {cssClass: 'alert-success', timeout: 3000});
            this.router.navigate(['/login']);
    }
      else {
            this.flashMessage.show('Something went wrong.', {cssClass: 'alert-danger', timeout: 3000});
            this.router.navigate(['/register']);
      }
    });
}

}
