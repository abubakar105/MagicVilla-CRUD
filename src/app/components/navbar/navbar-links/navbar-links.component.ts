import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-links',
  templateUrl: './navbar-links.component.html',
  styleUrl: './navbar-links.component.css'
})
export class NavbarLinksComponent {

  constructor(private router:Router){}
  logout(){
    localStorage.removeItem("isLogeedIn");
    localStorage.removeItem("UserToken");
    window.location.reload()
    this.router.navigate(['/login']);
  }
}
