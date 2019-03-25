import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SurvivorService } from './survivor.service';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    SurvivorService
  ]
})
export class DashboardModule { }
