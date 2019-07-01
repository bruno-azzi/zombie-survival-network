import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { DashboardComponent } from './dashboard.component';
import { SurvivorModule } from '../survivor/survivor.module';
import { HeaderComponent } from '../header/header.component';
import { SurvivorService } from '../survivor/survivor.service';
import { AddSurvivorComponent } from '../add-survivor/add-survivor.component';
@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent,
    AddSurvivorComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    SurvivorModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapApiKey
    })
  ],
  exports: [
    HeaderComponent,
    DashboardComponent,
    AddSurvivorComponent
  ],
  providers: [
    SurvivorService
  ]
})
export class DashboardModule { }
