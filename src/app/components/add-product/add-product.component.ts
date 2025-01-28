import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // For navigation
import { ToastrService } from 'ngx-toastr'; // Toastr for notifications

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private productService: ProductService,
    private router: Router, // For routing after adding product
    private toastr: ToastrService // Toastr for notifications
  ) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required], // Added validation for product name
      quantity: [0, [Validators.required, Validators.min(1)]], // Validation for quantity (required and min 1)
      isActive: [true] // Default value for isActive
    });
  }

  addProduct(): void {
    // Check if form is valid
    if (this.productForm.invalid) {
      // Show error if productName or quantity is not valid
      if (this.productForm.get('productName')?.invalid) {
        this.toastr.error('Product name is required', 'Error');
      }
      if (this.productForm.get('quantity')?.invalid) {
        if (this.productForm.get('quantity')?.value === 0) {
          this.toastr.error('Quantity cannot be zero', 'Error');
        } else {
          this.toastr.error('Quantity is required', 'Error');
        }
      }
      return; // Stop further execution if validation fails
    }

    // Prepare the form data to match the API expected format
    const productData = {
      productName: this.productForm.value.productName,
      quantity: this.productForm.value.quantity,
      isActive: this.productForm.value.isActive
    };

    // Make the API call to add the product
    this.productService.addProduct(productData).subscribe(
      (response) => {
        this.toastr.success('Product added successfully!', 'Success');
        console.log('Product added successfully:', response);
        this.productForm.reset(); // Reset form after submission
        
      },
      (error: any) => {
        this.toastr.error('Error adding product', 'Error');
        console.error('Error adding product:', error);
      }
    );
  }
}
