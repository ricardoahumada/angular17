import { ChangeDetectionStrategy, Component, computed, effect, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductClass } from '../../models/product-class';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent implements OnInit, OnDestroy {

  constructor(public productService: ProductService) {
    effect(() => {
      console.log("Counter cambio!", this.counter());
    })
  }

  ngOnInit(): void {
    this.timer = setTimeout(() => {
      console.log('Este es un mensaje diferido...');
    }, 1000);
  }

  unProducto: Product = {
    id: 2,
    code: 'cd1',
    name: 'Carrito',
    image: 'GardenCart.png'
  }

  timer: any = null;

  texto: WritableSignal<string> = signal('');
  show: WritableSignal<boolean> = signal(false);

  counter: WritableSignal<number> = signal(0);
  doubleCounter = computed(() => this.counter() * 2);

  productos: Array<Product> = [] as Product[];

  // productlist = signal(this.productos);

  totalStarts = computed(() => this.productService.productList().reduce((acc: number, aP: Product) => acc + (aP.stars ? aP.stars : 0), 0));

  addOne() {
    // this.counter = this.counter + 1;
    this.counter.set(this.counter() + 1);
  }

  genImgUrl() {
    return './assets/imgs/' + this.unProducto.image;
  }

  /* mostrar() {
    console.log("Mostrando...", this.texto);
    this.show = !this.show;
  } */

  updateStars(stars: number, pid: number | undefined) {
    // console.log('updateStars:', stars, pid);
    /* const aProduct = this.productos.find(aP => aP.id == pid);
    if (aProduct) aProduct.stars = stars;

    this.productlist.set([...this.productlist()]); */
    if(pid) this.productService.updateStars(pid, stars);
  } 

  ngOnDestroy(): void {
    console.log('Destruyendo....');
    clearTimeout(this.timer);
  }

}
