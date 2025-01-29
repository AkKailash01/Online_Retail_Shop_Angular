import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  
import { ProductListComponent } from './product-list.component';
import { FormsModule } from '@angular/forms';  
import { ProductService } from 'src/app/services/product.service';  
import { ToastrModule } from 'ngx-toastr'; 

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,ToastrModule.forRoot(),FormsModule],  
      declarations: [ProductListComponent],  
      providers: [ProductService]  
    });

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // Detect changes to initialize the component
  });

  it('should create', () => {
    expect(component).toBeTruthy();  
  });
});
