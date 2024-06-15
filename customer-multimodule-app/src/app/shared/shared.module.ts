import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared/shared.component';
import { NotSharedComponent } from './not-shared/not-shared.component';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [SharedComponent, NotSharedComponent],
  imports: [CommonModule],
  exports: [SharedComponent],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [SharedService],
    };
  }
}
