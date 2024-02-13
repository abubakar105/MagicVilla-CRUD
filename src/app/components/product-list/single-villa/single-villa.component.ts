import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-villa',
  templateUrl: './single-villa.component.html',
  styleUrl: './single-villa.component.css'
})
export class SingleVillaComponent implements OnInit{
  singleVilla;
  loading=true;
  constructor(private route: ActivatedRoute,private productService:ProductService,private _location: Location) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
       const prodId = params['id'];
       this.productService.fetchSingleVilla(prodId).subscribe({      
        next: (resData) => {
           console.log("Products:", resData);
           this.singleVilla=resData;
         },
        error: (error) => {
           console.error("Error fetching products:", error);
         }
       }
       );
    })
  }
  updateVilla(){
    console.log("UUUUUUUU",this.singleVilla.result)
  }
  backClicked() {
    this._location.back();
  }
}
