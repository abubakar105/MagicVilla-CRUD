import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppRouting } from './routing/routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-list/product-item/product-item.component';
import { ProductItemLoaderComponent } from './components/product-list/product-item-loader/product-item-loader.component';
import { NavbarLogoComponent } from './components/navbar/navbar-logo/navbar-logo.component';
import { NavbarLinksComponent } from './components/navbar/navbar-links/navbar-links.component';
import { NavbarFiltersComponent } from './components/navbar/navbar-filters/navbar-filters.component';
import { RegisterComponent } from './login/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    HomeComponent,
    NavbarComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductItemLoaderComponent,
    NavbarLogoComponent,
    NavbarLinksComponent,
    NavbarFiltersComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppRouting,
    FormsModule,
    HttpClientModule,
    NgxSkeletonLoaderModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
