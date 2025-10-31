import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { ProductDataService } from './product-data.service';
import { ProductDetailService } from './product-detail.service';
import { environment } from '../environments/environment';

describe('ProductDataService Integration (real API)', () => {
  let service: ProductDataService;
  const originalApiUrl = environment.apiUrl;

  beforeAll(() => {
    // aumentar timeout para llamadas a la API remota
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000; // 20s
    // apuntar al API público para pruebas de integración reales
    (environment as any).apiUrl = 'https://bitscape-api.onrender.com';
  });

  afterAll(() => {
    // restaurar valor original
    (environment as any).apiUrl = originalApiUrl;
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ProductDataService, ProductDetailService]
    });
    service = TestBed.inject(ProductDataService);
  });

  it('should fetch products from real API', async () => {
    const products = await firstValueFrom(service.getAllProducts());
    expect(Array.isArray(products)).toBeTrue();
    expect(products.length).toBeGreaterThan(0);
    expect(products[0]).toBeDefined();
  });

  it('should fetch categories from real API', async () => {
    const categories = await firstValueFrom(service.getAllCategories());
    expect(Array.isArray(categories)).toBeTrue();
    expect(categories.length).toBeGreaterThan(0);
  });

  it('should fetch product detail by id (using first product)', async () => {
    const products = await firstValueFrom(service.getAllProducts());
    expect(products.length).toBeGreaterThan(0);
    const firstProd: any = products[0];
    const prodId = firstProd.id ?? firstProd._id ?? firstProd.idProduct ?? null;
    expect(prodId).toBeTruthy();

    const detailService = TestBed.inject(ProductDetailService);
    const productDetail = await firstValueFrom(detailService.getOne(String(prodId)));
    expect(productDetail).toBeDefined();
    // comprobar que el id del detalle coincide (si está presente)
    const detailId = (productDetail as any).id ?? (productDetail as any)._id ?? null;
    if (detailId) {
      expect(String(detailId)).toBe(String(prodId));
    }
  });
});
