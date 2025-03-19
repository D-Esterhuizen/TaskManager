import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './productPage.component.html',
  styleUrls: ['./productPage.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ProductPageComponent implements OnInit {
  products: Product[] = [];
  loading: boolean = true;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    const startTime = Date.now();

    this.productService.getProducts().subscribe(data => {
      this.products = data;
      const elapsedTime = Date.now() - startTime;
      const remainingTime = 1000 - elapsedTime;

      if (remainingTime > 0) {
        setTimeout(() => {
          this.loading = false;
        }, remainingTime);
      } else {
        this.loading = false;
      }
    });
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.products = this.products.filter(product => product.productId !== productId);
    }, error => {
      console.error('Error deleting product:', error);
    });
  }
}