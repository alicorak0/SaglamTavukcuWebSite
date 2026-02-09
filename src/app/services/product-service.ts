import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
   private products: Product[] = [
  { productId: 1, categoryName: 'grills', productName: 'Big Burger', description: '200gr dana eti', tooltip: 'En çok satan', price: 150, image: 'revola.png' },
    { productId: 2, categoryName: 'grills', productName: 'Big Burger', description: '200gr dana eti', tooltip: 'En çok satan', price: 150, image: 'cheese-burger.jpg' },
    

];

getAll(): Product[] {  // tüm ürünleri döndürür
  return this.products;
}



getByCategory(categoryName: string): Product[] {
  return this.products.filter(p => p.categoryName === categoryName);
}
  
}
