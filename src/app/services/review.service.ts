import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Review } from '../models/review.model';  // Adjust the import path

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  // Sample dummy reviews
  private dummyReviews: Review[] = [
    { productId: '1', username: 'Alice', rating: 5, comment: 'Great product!', date: new Date().toLocaleDateString(), productName: 'Sample Product 1' },
    { productId: '1', username: 'Bob', rating: 4, comment: 'Good quality.', date: new Date().toLocaleDateString(), productName: 'Sample Product 1' },
  ];

  constructor() {}

  // Fetch reviews based on productId
  getReviews(productId: string): Review[] {
    return this.dummyReviews.filter(review => review.productId === productId);
  }

  addReview(review: Review): void {
    this.dummyReviews.push(review);
  }
}
