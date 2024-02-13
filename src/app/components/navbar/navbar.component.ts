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
  constructor(private authService: LoginService) {}
  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem('UserToken');
  }
  ngDoCheck(): void {
    this.isLoggedIn = localStorage.getItem('UserToken');
  }
}
