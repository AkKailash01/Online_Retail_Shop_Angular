import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Import HttpClientTestingModule
import { OrderProductComponent } from './order-product.component';
import { ProductService } from 'src/app/services/product.service';  // Import ProductService if used
import { ToastrModule } from 'ngx-toastr'; // Import ToastrModule
describe('OrderProductComponent', () => {
  let component: OrderProductComponent;
  let fixture: ComponentFixture<OrderProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,ToastrModule.forRoot()],  // Import HttpClientTestingModule for mocking HTTP requests
      declarations: [OrderProductComponent],  // Declare the component
      providers: [ProductService]  // Provide any necessary services, like ProductService
    });
    fixture = TestBed.createComponent(OrderProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();  // Ensure the component is created successfully
  });
});
