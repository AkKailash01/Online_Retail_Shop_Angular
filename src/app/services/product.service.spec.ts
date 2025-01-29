import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Import the HttpClientTestingModule
import { ProductService } from './product.service';  // Import the ProductService

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Include HttpClientTestingModule here
      providers: [ProductService]  // Ensure ProductService is provided
    });
    service = TestBed.inject(ProductService);  // Inject the ProductService
  });

  it('should be created', () => {
    expect(service).toBeTruthy();  // Test to check if the service is created
  });
});
