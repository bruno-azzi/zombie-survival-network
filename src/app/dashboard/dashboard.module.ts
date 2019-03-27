import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './dashboard.component';
import { SurvivorModule } from '../survivor/survivor.module';
import { SurvivorService } from '../survivor/survivor.service';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SurvivorModule,
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
