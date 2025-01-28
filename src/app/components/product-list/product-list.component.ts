import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';

interface Product {
  ProductId: string;
  ProductName: string;
  Quantity: number;
  IsActive: boolean;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];  // Use Product[] type for consistency
  searchQuery: string = '';

  constructor(private productService: ProductService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        // Filter products with quantity > 0 and store them
        this.products = data.filter(product => product.Quantity > 0);
        this.filteredProducts = [...this.products]; // Set filteredProducts initially
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  onSearch(): void {
    if (this.searchQuery) {
      this.filteredProducts = this.products.filter(product =>
        product.ProductName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredProducts = [...this.products]; // Show all products if search query is empty
    }
  }

  addToCart(product: Product): void {
    this.productService.addToCart(product);
    this.toastr.success(`${product.ProductName} added to cart!`, 'Success')
  }
}
