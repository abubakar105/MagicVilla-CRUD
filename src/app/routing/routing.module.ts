import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from '../components/notfound/notfound.component';
import { HomeComponent } from '../components/home/home.component';
import { AuthGuard, LoginAuthGuard } from '../guards/auth.guard';
import { ProductItemComponent } from '../components/product-list/product-item/product-item.component';
import { productsResolver } from '../Resolvers/products-resolve.resolver';
import { RegisterComponent } from '../login/register/register.component';
import { SingleVillaComponent } from '../components/product-list/single-villa/single-villa.component';

const route: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    resolve: { productsData: productsResolver },
  },
  { path: 'login', component: LoginComponent, canActivate: [LoginAuthGuard] },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home/:id',
    component: ProductItemComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'home/villas/:id',
    component:SingleVillaComponent,
    canActivate:[AuthGuard]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'page-not-found', component: NotfoundComponent },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule],
})
export class AppRouting {}
