import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Import HttpClientTestingModule
import { ProductListComponent } from './product-list.component';
import { FormsModule } from '@angular/forms';  // ✅ Import FormsModule
import { ProductService } from 'src/app/services/product.service';  // Import the ProductService if used
import { ToastrModule } from 'ngx-toastr'; // Import ToastrModule

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,ToastrModule.forRoot(),FormsModule],  // Import the HttpClientTestingModule for HTTP requests
      declarations: [ProductListComponent],  // Declare the component being tested
      providers: [ProductService]  // Provide ProductService if it's injected into the component
    });

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // Detect changes to initialize the component
  });

  it('should create', () => {
    expect(component).toBeTruthy();  // Ensure the component is created successfully
  });
});
