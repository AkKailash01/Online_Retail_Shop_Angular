import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Import HttpClientTestingModule
import { AddProductComponent } from './add-product.component';
import { ProductService } from 'src/app/services/product.service';  // Import ProductService if used
import { ReactiveFormsModule } from '@angular/forms';  // ✅ Import ReactiveFormsModule
import { ToastrModule } from 'ngx-toastr'; // Import ToastrModule
describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,ToastrModule.forRoot(),ReactiveFormsModule],
        // Import HttpClientTestingModule for mocking HTTP requests
      declarations: [AddProductComponent],  // Declare the component
      providers: [ProductService]  // Provide any necessary services, like ProductService
    });
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();  // Ensure the component is created successfully
  });
});
