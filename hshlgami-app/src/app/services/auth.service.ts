import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  authToken: any;
  students: any;

  constructor(private http:Http) { }

  registerStudents(students){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/register', students, {headers: headers})
      .map(res => res.json());
}
  authenticateStudents(students) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/authenticate', students, {headers: headers})
      .map(res => res.json());
  }

  gettProfile(){
    var headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');  
    let options = new RequestOptions({headers: headers});  
    return this.http.get('http://localhost:3000/api/profile', options)
      .map((response: Response) =>(response.json())); //res.json()   localStorage.getItem('students')
  }


  storeStudentsData(token, students){
    localStorage.setItem('token', token);
    localStorage.setItem('students', JSON.stringify(students));
    this.authToken = token;
    this.students = students;
  }
loadToken(){
  const token = localStorage.getItem('token');
  this.authToken = token;  
}

  loggedIn(){
    return tokenNotExpired('token');
  }
  logout (){
    this.authToken = null;
    this.students = null;
    localStorage.clear(); 
  }
}
