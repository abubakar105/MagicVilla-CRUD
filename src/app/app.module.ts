import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppRouting } from './routing/routing.module';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './login/register/register.component';
import { VillaListComponent } from './components/product-list/villa-list/villa-list.component';
import { SingleVillaComponent } from './components/product-list/single-villa/single-villa.component';
import { AddVillaComponent } from './components/add-villa/add-villa.component';
import { AngularToastifyModule, ToastService } from 'angular-toastify';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    HomeComponent,
    NavbarComponent,
    ProductListComponent,
    RegisterComponent,
    VillaListComponent,
    SingleVillaComponent,
    AddVillaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppRouting,
    FormsModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    AngularToastifyModule
  ],
  providers: [
    provideClientHydration(),
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
