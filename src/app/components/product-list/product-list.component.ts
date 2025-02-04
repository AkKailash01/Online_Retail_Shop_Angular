import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Product } from '../../models/review.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchQuery: string = '';
  currentPage: number = 1;
  totalPages: number = 1;
  itemsPerPage: number = 12; // Set items per page
  totalItems: number = 0;

  constructor(
    private productService: ProductService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data.filter(product => product.Quantity > 0);
        this.updateFilteredProducts(); // Initialize filtered list
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  updateFilteredProducts(): void {
    // Apply search filter
    let filteredList = this.products;
    if (this.searchQuery) {
      filteredList = this.products.filter(product =>
        product.ProductName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    // Update pagination
    this.totalItems = filteredList.length;
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    
    // Reset to first page when searching
    this.currentPage = 1;
    this.updatePage(filteredList);
  }

  updatePage(productsList: Product[]): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.filteredProducts = productsList.slice(startIndex, endIndex);
  }

  onSearch(): void {
    this.updateFilteredProducts();
  }

  addToCart(product: Product): void {
    this.productService.addToCart(product);
    this.toastr.success(`${product.ProductName} added to cart!`, 'Success');
  }

  goToReviews(productId: string): void {
    this.router.navigate(['/reviews', productId]);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePage(this.searchQuery ? this.products.filter(product =>
        product.ProductName.toLowerCase().includes(this.searchQuery.toLowerCase())
      ) : this.products);
    }
  }
}
