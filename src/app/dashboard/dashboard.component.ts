import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { TweenMax, Expo } from 'gsap';
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
    this.listSurvivors();
  }

  onUpdateSurvivors() {
    this.listSurvivors();
  }

  listSurvivors() {
    this.survivorService.getSurvivors().subscribe((data) => {
      this.survivors = data.slice().reverse();
      console.log('getSurvivors', this.survivors);

      setTimeout(() => {
        TweenMax.staggerTo('[data-component="survivor"]', .3, { left: 0, opacity: 1, ease: Expo.easeOut }, .03);
      }, 0);

    }, error => {
      console.log(error);
    });
  }

  getSurvivorDetails(survivor) {
    console.log(survivor);
  }
}
