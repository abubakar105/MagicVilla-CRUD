import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  Villas = [];
  loading = false;
  constructor(private productService: ProductService,private router: Router) {}
  update(id){
    this.router.navigate(['/home/villas', id]);
  }
  deleteVilla(id){
    console.log("Delete")
    this.productService.deleteVilla(id).subscribe({
      next: (resData) => {
        console.log('Products:', resData);
        this.getProducts()
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      },
    })
  }
  ngOnInit(): void {
    this.getProducts();
    
  }
  getProducts() {
    this.loading = true;
    this.productService.fetchProducts().subscribe({
      next: (resData) => {
        console.log('Products:', resData.result);
        this.Villas = resData.result;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      },
    });
  }
}
