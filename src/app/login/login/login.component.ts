import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from '../../services/login.model';
import { LoginService } from '../../services/login.service';
import { stringify } from 'querystring';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @ViewChild('f') loginForm: NgForm;
  sendingRequest=false;
  wrongCredentials=false

  user: LoginModel = {
    email: '',
    password: '',
  };
  constructor(private loginService: LoginService,private http: HttpClient) {}

  onSubmit() {
    this.sendingRequest=true
    this.user.email=this.loginForm.value.email;
    this.user.password=this.loginForm.value.password;
    this.loginForm.reset();
    this.loginService.login(this.user).subscribe({
      next: (token: string) => {
          localStorage.setItem('UserToken', JSON.stringify(token));
          this.sendingRequest=false;
      },
      error: (error) => {
        this.sendingRequest=false;
        this.wrongCredentials=true
        // alert('Error'+error);
      },
    });
  }
  dismiss(){
    this.wrongCredentials=false
  }
}
