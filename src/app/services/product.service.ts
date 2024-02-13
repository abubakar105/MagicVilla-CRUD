import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Params, Router } from "@angular/router";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
export class ProductService{
    constructor(private http: HttpClient,private router:Router) {}
    productList=[]
    
    fetchProducts():Observable<any>{
           return this.http
               .get(
                 'https://fakestoreapi.com/products'
               )
            //    .pipe(
            //      map((resData) => {
            //         console.log("resData")
            //         console.log(resData)
            //         // return "sda"
            //     //    this.productList=resData
            //      })
            //    )
    }
    fetchSingleProduct(id:Params){
      return this.http.get(
        `https://fakestoreapi.com/products/${id}`
      )
    }
}