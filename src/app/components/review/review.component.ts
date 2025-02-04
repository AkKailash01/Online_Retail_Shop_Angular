import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from '../../services/review.service';
import { ProductService } from '../../services/product.service';
import { Review } from '../../models/review.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewsComponent implements OnInit {
  productId: string = '';
  productName: string = '';
  reviews: Review[] = [];
  newReview: Review = { productId: '', username: '', rating: 0, comment: '', date: '', productName: '' };
  errorMessage: string = ''; // To store error message

  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id') || '';

      // Fetch the product name using the productId by subscribing to the observable
      this.productService.getProductById(this.productId).subscribe({
        next: (product: any) => {
          console.log('Fetched product:', product); // Check the product object
          this.productName = product.ProductName;  // Access the product name after subscription
        },
        error: (err) => {
          if (err.status === 404) {
            this.errorMessage = 'Product not found. Please check the product ID.';
          } else {
            this.errorMessage = 'An error occurred while fetching product details.';
          }
        }
      });

      // Fetch the reviews for the product
      this.reviews = this.reviewService.getReviews(this.productId);
    });
  }

  addReview(): void {
    if (this.newReview.username && this.newReview.comment) {
      this.newReview.productId = this.productId;
      this.newReview.productName = this.productName; // Set product name for the new review
      this.newReview.date = new Date().toLocaleDateString();  // Set the current date
      this.reviewService.addReview({ ...this.newReview });
      this.reviews = this.reviewService.getReviews(this.productId); // Refresh reviews
      this.newReview = { productId: '', username: '', rating: 0, comment: '', date: '', productName: '' }; // Reset form
    }
  }
}
