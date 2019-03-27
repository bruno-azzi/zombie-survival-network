import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { Survivor } from '../survivor/survivor.types';
import { SurvivorService } from '../survivor/survivor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  survivors: Survivor[];

  constructor(private survivorService: SurvivorService) {}

  ngOnInit() {
    this.survivorService.getSurvivors().subscribe((data) => {
      this.survivors = data;
    }, error => {
      console.log(error);
    });
  }
}
