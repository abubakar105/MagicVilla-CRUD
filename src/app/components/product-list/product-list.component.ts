import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products = [];
  loading = false;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.loading = true;

    this.activatedRoute.data.subscribe((response: any) => {
      next: {
        this.products = response.productsData;
          this.loading = false;
      }
      error: (error) => {
        console.log('Error fetching products:', error);
      }
    });
    // this.productService.fetchProducts().subscribe({

    //  next: (resData) => {
    //     console.log("Products:", resData);
    //     this.products=resData;
    //   },
    //  error: (error) => {
    //     console.error("Error fetching products:", error);
    //   }
    // }
    // );
  }
  getProducts() {}
}
