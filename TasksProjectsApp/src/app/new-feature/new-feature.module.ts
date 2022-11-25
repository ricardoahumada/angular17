import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewFeatureRoutingModule } from './new-feature-routing.module';
import { NewFeatureComponent } from './new-feature.component';


@NgModule({
  declarations: [
    NewFeatureComponent
  ],
  imports: [
    CommonModule,
    NewFeatureRoutingModule
  ]
})
export class NewFeatureModule { }
