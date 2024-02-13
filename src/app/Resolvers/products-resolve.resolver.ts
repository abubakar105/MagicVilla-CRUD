import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductService } from '../services/product.service';
import { EMPTY, take } from 'rxjs';

export const productsResolver: ResolveFn<boolean> = (route, state) => {
  const productService = inject(ProductService);
  switch (state.url) {
    case '/home':
      return productService.fetchProducts().pipe(take(1), (productsData) => {
        if (productsData) {
          return productsData;
        } else {
          return EMPTY;
        }
      });
    // default :
    //     return EMPTY;
  }
};
