import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { Survivor } from './survivor.types';

@Component({
  selector: 'app-survivor',
  templateUrl: './survivor.component.html',
  styleUrls: ['./survivor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SurvivorComponent implements OnInit {

  @Input() survivor: Survivor;

  constructor() { }

  ngOnInit() {

  }

}
