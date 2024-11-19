import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { DATA } from '../data/products';
import { Product } from '../models/product';
import { ProductHTTPService } from './producthttp.service';

const API_URL = environment.apiULR;

const httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get']);/* USING PURE JASMINE */
const expectedUrl = `${API_URL}/products`;

describe('ProductHTTPService', () => {
  let service: ProductHTTPService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        // provideHttpClient(), provideHttpClientTesting,
        // { provide: HttpClient, useValue: httpClientSpy }  /* USING PURE JASMINE */

      ]
    });
    service = TestBed.inject(ProductHTTPService);
    controller = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get api products fake HttpClientTestingModule', () => {

    let receivedProds = [] as Product[];
    service.getProducts().subscribe((data: any) => {
      receivedProds = data;
    })

    const request = controller.expectOne(expectedUrl);
    request.flush(DATA);
    controller.verify();

    expect(receivedProds).toEqual(DATA)
  });

  /* USING PURE JASMINE */
  /* it('get api products fake jasmine', () => {
    httpClientSpy.post.and.returnValue(of({ status: 200, data: {} }));
    httpClientSpy.get.and.returnValue(of({ status: 200, data: {} }));

    service.getProducts().subscribe((data: any) => {
      console.log('fake jasmine data:', data);
      expect(data.status).toBe(200);
    })
    
  }); */


});
