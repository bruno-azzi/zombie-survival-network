import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { Survivor } from './survivor.types';
import { SurvivorService } from './survivor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  @Input() survivors: Survivor[];

  constructor(private survivorService: SurvivorService) {}

  ngOnInit() {
    this.survivorService.getSurvivors().subscribe((data) => {
      this.survivors = data;
    }, error => {
      console.log(error);
    });
  }
}
