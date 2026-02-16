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
    {
      productId: 1,
      categoryName: 'burgers',
      productName: 'Döner Dürüm',
      description: 'Özenle marine edilmiş 100 gr tavuk döner, taze ekmek ve özel soslarımızla hazırlanır.',
      tooltip: 'En çok satan',
      price: 150,
      image: 'dönerler-3.jpg'
    },
    {
      productId: 2,
      categoryName: 'burgers',
      productName: 'Patates Kızartması',
      description: 'Günlük taze patateslerden, dışı çıtır içi yumuşak olacak şekilde kızartılır.',
      tooltip: 'En çok satan',
      price: 150,
      image: 'aperatifler-1.jpg'
    },
    {
      productId: 3,
      categoryName: 'burgers',
      productName: 'Soğan Halkası',
      description: 'Altın sarısı kaplamasıyla çıtır çıtır, sıcak servis edilen soğan halkaları.',
      tooltip: 'En çok satan',
      price: 150,
      image: 'aperatifler-2.jpg'
    }


  ]

  constructor(private productService: ProductService) { }

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
