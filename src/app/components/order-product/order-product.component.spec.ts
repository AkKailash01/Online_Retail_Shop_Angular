import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  
import { OrderProductComponent } from './order-product.component';
import { ProductService } from 'src/app/services/product.service';  
import { ToastrModule } from 'ngx-toastr'; 
import { of } from 'rxjs';
describe('OrderProductComponent', () => {
  let component: OrderProductComponent;
  let fixture: ComponentFixture<OrderProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,ToastrModule.forRoot()],  
      declarations: [OrderProductComponent],  
      providers: [ProductService]  
    });
    fixture = TestBed.createComponent(OrderProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); 
  });
});
