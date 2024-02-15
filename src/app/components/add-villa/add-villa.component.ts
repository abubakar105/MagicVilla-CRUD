import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import Toastify from 'toastify';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-add-villa',
  templateUrl: './add-villa.component.html',
  styleUrl: './add-villa.component.css',
})
export class AddVillaComponent {
  @ViewChild('createVilla') createVillaForm: NgForm;

  singleVilla = {
    name: '',
    amenity: '',
    details: '',
    imageUrl: '',
    occupancy: 0,
    rate: 0,
    sqft: 0,
  };
  valid = false;
  loading = true;
  id;
  message = '';
  isError = false;

  constructor(
    private _toastService: ToastService,
    private route: ActivatedRoute,
    private productService: ProductService,
    private _location: Location,
    private router: Router
  ) {}
  updateName(field: string, value: any) {
    this.singleVilla[field] = value;
  }
  createVilla() {
    this._toastService.info('This is the body of the notification');

    if (
      this.singleVilla.amenity !== '' &&
      this.singleVilla.name !== '' &&
      this.singleVilla.details !== '' &&
      this.singleVilla.rate > 0 &&
      this.singleVilla.imageUrl !== '' &&
      this.singleVilla.occupancy > 0 &&
      this.singleVilla.sqft > 0
    ) {
      this.message = '';
      this.valid = true;
      this.productService.createVilla(this.singleVilla).subscribe({
        next: (res) => {
          this._location.back();
        },
        error: (error) => {
          this.isError = true;
          console.log(error.error.ErrorMessage[0]);
          setTimeout(() => {
            this.closeMsg();
          }, 5000);
        },
      });
    } else {
      this.message = 'All the fields are required ';
    }
  }
  closeMsg() {
    this.isError = false;
  }
}
