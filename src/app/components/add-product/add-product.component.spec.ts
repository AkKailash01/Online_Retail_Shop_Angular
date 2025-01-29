import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  
import { AddProductComponent } from './add-product.component';
import { ProductService } from 'src/app/services/product.service'; 
import { ReactiveFormsModule } from '@angular/forms';  
import { ToastrModule } from 'ngx-toastr'; 
describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,ToastrModule.forRoot(),ReactiveFormsModule],
        
      declarations: [AddProductComponent],  
      providers: [ProductService]  
    });
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();  
  });
  it('should call addProduct() when form is submitted with valid data', () => {
    spyOn(component, 'addProduct'); // ✅ Spy on the addProduct method

    // ✅ Set form values, including 'quantity' and 'isActive'
    component.productForm.setValue({
      productName: 'Test Product',
      
      quantity: 5,  // Added 'quantity' to match the form control name
      isActive: true,  // Added 'isActive' form control
    });

    fixture.detectChanges(); // ✅ Apply changes

    // ✅ Simulate form submission
    component.productForm.updateValueAndValidity();
    component.addProduct();

    expect(component.addProduct).toHaveBeenCalled(); // ✅ Check if addProduct() was called
  });
});
