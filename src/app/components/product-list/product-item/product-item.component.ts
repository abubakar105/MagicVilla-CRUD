import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent  implements OnInit{
  singleProduct;
  loading=true
  constructor(private route: ActivatedRoute,private productService:ProductService) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
       const prodId = params['id'];
       this.productService.fetchSingleProduct(prodId).subscribe({      
        next: (resData) => {
           console.log("Products:", resData);
           this.singleProduct=resData;
           setTimeout(()=>{
             this.loading=false
            },500)
         },
        error: (error) => {
           console.error("Error fetching products:", error);
         }
       }
       );
    })
  }
}
