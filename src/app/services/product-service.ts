import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products: Product[] = [
    { productId: 1, categoryName: 'ızgaralar', productName: 'Tavuk Göğsü Izgara', description: '200gr dana eti', tooltip: 'En çok satan', price: 200, image: 'ızgaralar-1.jpg' },
    { productId: 2, categoryName: 'ızgaralar', productName: 'Tavuk Kanat Izgara', description: '200gr dana eti', tooltip: 'En çok satan', price: 250, image: 'ızgaralar-2.jpg' },
    { productId: 3, categoryName: 'ızgaralar', productName: 'Barbekülü Kanat', description: '200gr dana eti', tooltip: 'En çok satan', price: 250, image: 'ızgaralar-3.jpg' },


    { productId: 4, categoryName: 'dönerler', productName: 'Döner Porsiyon', description: '200gr dana eti', tooltip: 'En çok satan', price: 200, image: 'dönerler-1.jpg' },
    { productId: 5, categoryName: 'dönerler', productName: 'Döner Sandviç', description: '200gr dana eti', tooltip: 'En çok satan', price: 120, image: 'dönerler-2.jpg' },

    { productId: 6, categoryName: 'aperatifler', productName: 'Patates Kızartması', description: '200gr dana eti', tooltip: 'En çok satan', price: 100, image: 'aperatifler-1.jpg' },
    { productId: 7, categoryName: 'aperatifler', productName: 'Soğan Halkası', description: '200gr dana eti', tooltip: 'En çok satan', price: 80, image: 'aperatifler-2.jpg' },

    { productId: 8, categoryName: 'içecekler', productName: 'Coca Cola', description: '200gr dana eti', tooltip: 'En çok satan', price: 60, image: 'içecekler-1.jpg' },
    { productId: 9, categoryName: 'içecekler', productName: 'Fanta', description: '200gr dana eti', tooltip: 'En çok satan', price: 60, image: 'içecekler-2.jpg' },
    { productId: 10, categoryName: 'içecekler', productName: 'Schweppes', description: '200gr dana eti', tooltip: 'En çok satan', price: 60, image: 'içecekler-3.jpg' },
    { productId: 11, categoryName: 'içecekler', productName: 'Fuse Tea Mango', description: '200gr dana eti', tooltip: 'En çok satan', price: 60, image: 'içecekler-4.jpg' },
    { productId: 12, categoryName: 'içecekler', productName: 'Fuse Tea Karpuz', description: '200gr dana eti', tooltip: 'En çok satan', price: 60, image: 'içecekler-5.jpg' },
    { productId: 13, categoryName: 'içecekler', productName: 'Fuse Tea Şeftali', description: '200gr dana eti', tooltip: 'En çok satan', price: 60, image: 'içecekler-6.jpg' },
    { productId: 14, categoryName: 'içecekler', productName: 'Fuse Tea Limon', description: '200gr dana eti', tooltip: 'En çok satan', price: 60, image: 'içecekler-7.jpg' },

    { productId: 15, categoryName: 'çiğ-ürünler', productName: 'Piliç But', description: '200gr dana eti', tooltip: 'En çok satan', price: 180, image: 'çiğ-ürünler-1.jpg' },
    { productId: 16, categoryName: 'çiğ-ürünler', productName: 'Piliç Bonfile', description: '200gr dana eti', tooltip: 'En çok satan', price: 240, image: 'çiğ-ürünler-2.jpg' },
    { productId: 17, categoryName: 'çiğ-ürünler', productName: 'Bütün Piliç', description: '200gr dana eti', tooltip: 'En çok satan', price: 90, image: 'çiğ-ürünler-3.jpg' },
    { productId: 18, categoryName: 'çiğ-ürünler', productName: 'Piliç Kanat', description: '200gr dana eti', tooltip: 'En çok satan', price: 270, image: 'çiğ-ürünler-4.jpg' },
    { productId: 19, categoryName: 'çiğ-ürünler', productName: 'Piliç Bonfile', description: '200gr dana eti', tooltip: 'En çok satan', price: 240, image: 'çiğ-ürünler-5.jpg' },
    { productId: 20, categoryName: 'çiğ-ürünler', productName: 'Piliç Baget', description: '200gr dana eti', tooltip: 'En çok satan', price: 200, image: 'çiğ-ürünler-6.jpg' },
    { productId: 20, categoryName: 'çiğ-ürünler', productName: 'Piliç But İncik', description: '200gr dana eti', tooltip: 'En çok satan', price: 240, image: 'çiğ-ürünler-7.jpg' },







  ];

  getAll(): Product[] {  // tüm ürünleri döndürür
    return this.products;
  }



  getByCategory(categoryName: string): Product[] {
    return this.products.filter(p => p.categoryName === categoryName);
  }

}
