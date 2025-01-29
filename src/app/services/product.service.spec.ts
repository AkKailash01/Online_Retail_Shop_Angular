import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  
import { ProductService } from './product.service';  
import { of } from 'rxjs';


describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  
      providers: [ProductService]  
    });
    service = TestBed.inject(ProductService);  
  });

  it('should be created', () => {
    expect(service).toBeTruthy();  
  });

  it('should fetch product list', () => {
    const productService = TestBed.inject(ProductService);
    spyOn(productService, 'getProducts').and.returnValue(of([{ id: 1, name: 'Laptop' }]));
  
    productService.getProducts().subscribe(products => {
      expect(products.length).toBeGreaterThan(0);
      expect(products[0].name).toBe('Laptop');
    });
    });
  
});
