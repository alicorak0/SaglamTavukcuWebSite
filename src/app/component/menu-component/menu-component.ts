import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { FreeMode } from 'swiper/modules';

@Component({
  selector: 'app-menu-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css',
})
export class MenuComponent implements AfterViewInit {

 products: Product[] = [
  { productId: 1, categoryName: 'burgers', productName: 'Big Burger', description: '200gr dana eti', tooltip: 'En çok satan', price: 150, image: 'mozarella-sticks.jpg' },
    { productId: 2, categoryName: 'burgers', productName: 'Big Burger', description: '200gr dana eti', tooltip: 'En çok satan', price: 150, image: 'mozarella-sticks.jpg' },  { productId: 1, categoryName: 'burgers', productName: 'Big Burger', description: '200gr dana eti', tooltip: 'En çok satan', price: 150, image: 'cheese-burger.jpg' },
  { productId: 3, categoryName: 'burgers', productName: 'Big Burger', description: '200gr dana eti', tooltip: 'En çok satan', price: 150, image: 'mozarella-sticks.jpg' }

]

constructor(private productService: ProductService) {}

ngAfterViewInit(): void {
  
     // Slider başlat
      new Swiper('.swiper', {
        modules: [FreeMode],
        slidesPerView: 'auto',
        spaceBetween: 20,
        freeMode: true // mouse ve touch drag
      });
}

}
