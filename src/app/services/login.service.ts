import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from './login.model';
import { Observable, catchError, map, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLogeedIn: boolean = false;
  private url = 'https://localhost:7065/api/UserAuth/login';

  constructor(private http: HttpClient,private router:Router) {}

  login(user: LoginModel) {
    const loginUser={
      userName:user.email,
      password:user.password
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

        return this.http.post<any>(this.url,loginUser).pipe(
        map((res) => {
          console.log(res);
          console.log("res");
            const token = res?.result?.token;
            if (token) {
            this.isLogeedIn=true
            localStorage.setItem("isLogeedIn",JSON.stringify(this.isLogeedIn))
              this.router.navigate(['/home'])
            return token;
            } else {
                throw new Error('Wrong Email or Password');
            }
        })
        );
  }
  // constructor(private http: HttpClient) { }
  // private url='https://dummyjson.com/auth/login'

  // login(user:LoginModel){
  //     const headers = new HttpHeaders({
  //         'Content-Type': 'application/json'
  //       });

  //     this.http.post('https://dummyjson.com/auth/login',user,{headers:headers}).subscribe({
  //         next: (data) => {
  //           console.log('Response:', data);
  //           // Handle successful login
  //         },
  //         error: (error) => {
  //           console.error('Error:', error);
  //           // Handle login error
  //         }
  //       });
  // }
}
