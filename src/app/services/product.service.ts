import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface CartProduct {
  ProductId: string;
  ProductName: string;
  Quantity: number;
  OrderQuantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'https://uiexercise.theproindia.com/api/Product';
  private orderUrl = 'https://uiexercise.theproindia.com/api/Order/AddOrder';

  private cart: CartProduct[] = [];

  constructor(private http: HttpClient) {}

  // Get all products
  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/GetAllProduct`);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/AddProduct`, product);
  }
  

  // Order product
  orderProduct(order: any): Observable<any> {
    return this.http.post(this.orderUrl, order);
  }

  // Add product to cart
  addToCart(product: any): void {
    const existingProduct = this.cart.find(p => p.ProductId === product.ProductId);
    if (!existingProduct) {
      this.cart.push({ ...product, OrderQuantity: 1 });
    }
  }

  // Remove product from cart
  removeFromCart(productId: string): void {
    this.cart = this.cart.filter(product => product.ProductId !== productId);
  }

  // Get cart products
  getCartProducts(): CartProduct[] {
    return [...this.cart];
  }
}
