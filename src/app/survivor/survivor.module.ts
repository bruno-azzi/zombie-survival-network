import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurvivorService } from './survivor.service';
import { SurvivorComponent } from './survivor.component';

@NgModule({
  declarations: [
    SurvivorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SurvivorComponent
  ],
  providers: [
    SurvivorService
  ]
})
export class SurvivorModule { }
