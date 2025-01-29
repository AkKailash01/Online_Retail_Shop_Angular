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
});
