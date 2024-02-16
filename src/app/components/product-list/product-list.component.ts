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
  isDeleted=false;
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 4;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private productService: ProductService,private router: Router) {}
  update(id){
    this.router.navigate(['/home/villas', id]);
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getProducts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getProducts();
  }
  deleteVilla(id){
    this.productService.deleteVilla(id).subscribe({
      next: (resData) => {
        console.log('Products:', resData);
        this.getProducts()
        this.isDeleted=true;
        setTimeout(()=>{
          this.isDeleted=false;
        },2000)
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
        this.Villas = resData.result;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      },
    });
  }
}
