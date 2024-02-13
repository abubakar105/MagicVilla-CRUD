import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private authService: LoginService) {} // Replace AuthService with your actual authentication service

  isUserLoggedIn(): boolean {
    return this.authService.isLogeedIn; // Replace with your actual login status check
  }
}
