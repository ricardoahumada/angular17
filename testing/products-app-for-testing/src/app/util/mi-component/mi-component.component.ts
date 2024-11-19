import { Component, signal } from '@angular/core';

@Component({
  selector: 'mi-component',
  standalone: true,
  imports: [],
  templateUrl: './mi-component.component.html',
  styleUrl: './mi-component.component.scss'
})
export class MiComponentComponent {
  // value = signal(0);
  value = 0;
  addOne() {
    // this.value.set(this.value() + 1);
    this.value ++;
  }
}
