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
  limitRate :number=0;
  search='';
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 4;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private productService: ProductService,private router: Router) {}
  ngOnInit(): void {
    this.getProducts();
  }
  limitPrice(r:number){
    console.log("VALUEEE",r)
    // if(r>0){
      this.limitRate=r;
    this.getProducts();
    // }
  }
  update(id){
    this.router.navigate(['/home/villas', id]);
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getProducts();
  }
  filterByName(search){
    this.search=search
    this.getProducts()
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

  getProducts() {
    this.loading = true;
    this.productService.fetchProducts(this.search,this.limitRate).subscribe({
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
