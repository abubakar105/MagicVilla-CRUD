import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit, DoCheck {
  isLoggedIn: string;
  constructor(private authService: LoginService,private router:Router) {}
  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem('UserToken');
  }
  ngDoCheck(): void {
    this.isLoggedIn = localStorage.getItem('UserToken');
  }
  logout(){
    localStorage.removeItem("isLogeedIn");
    localStorage.removeItem("UserToken");
    window.location.reload()
    this.router.navigate(['/login']);
  }
}
