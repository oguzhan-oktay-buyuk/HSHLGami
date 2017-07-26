import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from "angular2-flash-messages/module";
import { AuthService } from "app/services/auth.service";
import { Router } from '@angular/router';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})
         

export class UserComponent implements OnInit{ 
    students: Object;

    name: String;
    surname: String;
    address: String;
    phoneNumber: String;

    constructor(
  private flashMessage:FlashMessagesService,
  private authService:AuthService,
 ){ }
  
    ngOnInit(){
        // $.getScript('../../../assets/js/material-dashboard.js');
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

    onChangeSubmit(){
    const students ={
      name: this.name,
      surname: this.surname,
      address: this.address,
      phoneNumber: this.phoneNumber
  }

          this.authService.updateProfile(students).subscribe(data => {
            this.flashMessage.show('Your profile updated.', {cssClass: 'alert-success', timeout: 3000});    
    });
    }
onUpdateVideoEvent(students:any){
    this.authService.updateProfile(students)
      .subscribe(resUpdatedVideo => students = resUpdatedVideo);
  }

  
}

