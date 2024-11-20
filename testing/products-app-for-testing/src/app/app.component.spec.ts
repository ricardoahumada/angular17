import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingHarness } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReplicateDirective } from './directives/replicate.directive';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { RateComponent } from './util/rate/rate.component';

describe('AppComponent', () => {

  let component: ProductsListComponent | ListOrdersComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, ProductsListComponent, ReplicateDirective],
      imports: [AppRoutingModule, FilterProductsPipe, FormsModule, RateComponent],
      /* providers: [
        provideRouter([
          {path: 'products',component: ProductsListComponent,},
          {path: 'orders',component: ListOrdersComponent,},
        ]),
        provideLocationMocks(),
      ], */
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'products-app'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('products-app');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, products-app');
  });

  it('should navigate to orders', async () => {

    const harness = await RouterTestingHarness.create('orders');

    const heading = harness
      .routeNativeElement
      ?.querySelector('h2')
      ?.textContent
      ?.trim() ?? '';
    expect(heading).toBe('Pedidos');
  });
  
  it('should navigate to products', async () => {

    const harness = await RouterTestingHarness.create('products');

    const heading = harness
      .routeNativeElement
      ?.querySelector('h2')
      ?.textContent
      ?.trim() ?? '';
    expect(heading).toBe('Lista de productos');
  });

});
