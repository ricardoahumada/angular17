import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared/shared.component';
import { SharedService } from './services/shared.service';



@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SharedComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [SharedService]
    };
  }

}
