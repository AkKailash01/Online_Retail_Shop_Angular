import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';

interface CartProduct {
  ProductId: string;
  ProductName: string;
  Quantity: number;
  OrderQuantity: number;
}

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {
  cartProducts: CartProduct[] = [];

  constructor(private productService: ProductService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.cartProducts = this.productService.getCartProducts();
  }

  increaseOrderQuantity(productId: string): void {
    const product = this.cartProducts.find(p => p.ProductId === productId);
    if (product && product.OrderQuantity < product.Quantity) {
      product.OrderQuantity++;
    } else {
      this.toastr.warning('Cannot increase beyond available stock', 'Warning');
    }
  }

  decreaseOrderQuantity(productId: string): void {
    const product = this.cartProducts.find(p => p.ProductId === productId);
    if (product && product.OrderQuantity > 1) {
      product.OrderQuantity--;
    }
  }

  removeFromCart(productId: string): void {
    this.productService.removeFromCart(productId);
    this.cartProducts = this.productService.getCartProducts();
    this.toastr.info('Product removed from cart', 'Info');
  }

  placeOrder(): void {
    if (this.cartProducts.length === 0) {
      this.toastr.warning('Cart is empty!', 'Warning');
      return;
    }

    this.cartProducts.forEach(product => {
      const orderData = {
        customerId: "457b5ccc-1ec5-49b3-a849-08dc44a922b3",
        productId: product.ProductId,
        quantity: product.OrderQuantity
      };

      this.productService.orderProduct(orderData).subscribe(
        () => {
          this.toastr.success(`Order placed for ${product.ProductName}`, 'Success');
          this.removeFromCart(product.ProductId);
        },
        (error) => {
          this.toastr.error(`Error ordering ${product.ProductName}`, 'Error');
          console.error(error);
        }
      );
    });
  }
}
