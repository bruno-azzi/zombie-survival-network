import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

import { AddSurvivorService } from './add-survivor.service';

@Component({
  selector: 'app-add-survivor',
  templateUrl: './add-survivor.component.html',
  styleUrls: ['./add-survivor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddSurvivorComponent implements OnInit {

  newSurvivor;
  addSurvivorForm: FormGroup;
  @Output() updatedSurvivorList = new EventEmitter();

  constructor(
    private addSurvivorService: AddSurvivorService) { }

  ngOnInit() {
    this.addSurvivorForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      lonLat: new FormControl(null),
      items: new FormControl(null, [Validators.required]),
      ['infected?']: new FormControl(null)
    });
  }

  onSubmit() {
    if (this.addSurvivorForm.valid) {
      const formValue = this.addSurvivorForm.value;

      this.addSurvivorService.addSurvivor(formValue).subscribe(data => {
        this.newSurvivor = data;
        console.log('newSurvivor:', this.newSurvivor)
        this.emitSurvivorsUpdate();

      }, error => {
        console.log('DEU PAU!:', error);
      });
    }
  }

  emitSurvivorsUpdate() {
    this.updatedSurvivorList.emit();
  }

}
