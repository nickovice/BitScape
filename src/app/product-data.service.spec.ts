import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductDataService } from './product-data.service';
import { environment } from '../environments/environment';
import { Product } from './admin/product';
import { Category } from './products/category';

describe('ProductDataService', () => {
  let service: ProductDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductDataService]
    });
    service = TestBed.inject(ProductDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya requests pendientes
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all products', () => {
    const mockProducts: Product[] = [
      { id: 1, name: 'Product 1', price: 100, category: 1, image: 'img1', info: 'desc1', brand: 'brand1' },
      { id: 2, name: 'Product 2', price: 200, category: 2, image: 'img2', info: 'desc2', brand: 'brand2' }
    ];

    service.getAllProducts().subscribe(products => {
      expect(products).toEqual(mockProducts);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/products`);
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });

  it('should get all categories', () => {
    const mockCategories: Category[] = [
      { id: 1, name: 'Category 1', info: 'Info 1' },
      { id: 2, name: 'Category 2', info: 'Info 2' }
    ];

    service.getAllCategories().subscribe(categories => {
      expect(categories).toEqual(mockCategories);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/categories`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCategories);
  });

  it('should get products by category', () => {
    const categoryId = "1";
    const mockProducts: Product[] = [
      { id: 1, name: 'Product 1', price: 100, category: 1, image: 'img1', info: 'desc1', brand: 'brand1' }
    ];

    service.getProductsByCategory(categoryId).subscribe(products => {
      expect(products).toEqual(mockProducts);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/products?category=${categoryId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });
});
