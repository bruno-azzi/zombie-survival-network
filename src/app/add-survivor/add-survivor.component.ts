import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { AddSurvivorService } from './add-survivor.service';
import { SurvivorService } from '../survivor/survivor.service';
import { Survivor } from '../survivor/survivor.types';

@Component({
  selector: 'app-add-survivor',
  templateUrl: './add-survivor.component.html',
  styleUrls: ['./add-survivor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddSurvivorComponent implements OnInit {

  addSurvivorForm: FormGroup;
  survivor: Survivor;

  constructor(
    private addSurvivorService: AddSurvivorService
    ) { }

  ngOnInit() {
    this.addSurvivorForm = new FormGroup({
      name: new FormControl(null),
      age: new FormControl(null),
      gender: new FormControl(null),
      lonLat: new FormControl(null),
      items: new FormControl(null),
      ['infected?']: new FormControl(null)
    });
  }

  onSubmit() {
    var formValue = this.addSurvivorForm.value;
    this.addSurvivorService.addSurvivor(formValue).subscribe((data) => {
      this.survivor = data;
    }, error => {
      console.log(error);
    });
  }

}
