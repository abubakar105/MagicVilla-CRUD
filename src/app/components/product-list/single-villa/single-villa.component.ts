import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-villa',
  templateUrl: './single-villa.component.html',
  styleUrls: ['./single-villa.component.css'],
})
export class SingleVillaComponent implements OnInit {
  singleVilla;
  loading = true;
  id;
  message="";

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private _location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.productService.fetchSingleVilla(this.id).subscribe({
        next: (resData) => {
          console.log('Products:', resData);
          this.singleVilla = resData;
        },
        error: (error) => {
          console.error('Error fetching products:', error);
        },
      });
    });
  }

  updateName(field: string, value: any) {
    this.singleVilla.result[field] = value;
  }

  updateVillaa() {
    console.log('Updated Villa:', this.singleVilla.result);
    if (
      this.singleVilla.result.name !== '' &&
      this.singleVilla.result.rate > 0 &&
      this.singleVilla.result.details !== '' &&
      this.singleVilla.result.imageUrl !== '' &&
      this.singleVilla.result.occupancy > 0 &&
      this.singleVilla.result.sqft > 0 &&
      this.singleVilla.result.amenity !== ''
    ){

      this.productService
        .updateVilla(this.id, this.singleVilla.result)
        .subscribe({
          next: (res) => {
            this._location.back();
          },
        });
    }
    else{
      this.message="Not any Field could be Empty or 0";
    }
  }
  closeMsg(){
    this.message=""
  }
  backClicked() {
    this._location.back();
  }
}
