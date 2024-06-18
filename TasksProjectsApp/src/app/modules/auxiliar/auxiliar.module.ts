import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete/delete.component';
import { FilterElementsPipe } from './pipes/filter-elements.pipe';



@NgModule({
  declarations: [
    DeleteComponent,
    FilterElementsPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DeleteComponent,
    FilterElementsPipe
  ]
})
export class AuxiliarModule { }
