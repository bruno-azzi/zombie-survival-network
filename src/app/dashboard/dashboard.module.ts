import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { SurvivorModule } from '../survivor/survivor.module';
import { SurvivorService } from '../survivor/survivor.service';
import { AddSurvivorComponent } from '../add-survivor/add-survivor.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddSurvivorComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SurvivorModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent,
    AddSurvivorComponent
  ],
  providers: [
    SurvivorService
  ]
})
export class DashboardModule { }
