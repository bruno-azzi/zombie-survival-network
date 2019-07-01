import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import $ from 'jquery';

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
  // @Output() updatedInputValue = new EventEmitter();
  lat;
  lng;
  zoom = 15;
  styles = [
    {
      'stylers': [
        {
          'hue': '#ff1a00'
        },
        {
          'invert_lightness': true
        },
        {
          'saturation': -100
        },
        {
          'lightness': 33
        },
        {
          'gamma': 0.5
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#2D333C'
        }
      ]
    }
  ];

  constructor(
    private addSurvivorService: AddSurvivorService) { }

  ngOnInit() {
    this.addSurvivorForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      lonlat: new FormControl(null),
      items: new FormControl(null, [Validators.required]),
      water: new FormControl(0, [Validators.required]),
      food: new FormControl(0, [Validators.required]),
      medication: new FormControl(0, [Validators.required]),
      ammo: new FormControl(0, [Validators.required]),
      ['infected?']: new FormControl(null)
    });

    this.getLocation();
  }

  dragStart(e) {
    console.log('dragStart', e.coords);
  }

  dragEnd(e) {
    console.log('dragEnd', e.coords);
    this.updateLocationInput(e.coords.lat, e.coords.lng);
  }

  updateLocationInput(lon, lat) {
    this.addSurvivorForm.controls.lonlat.patchValue(`Point(${lon} ${lat})`);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.updateLocationInput(this.lng, this.lat);
      });
    }
  }

  onSubmit() {
    if (this.addSurvivorForm.valid) {
      const formValue = this.addSurvivorForm.value;
      console.log('formValue', formValue);

      this.addSurvivorService.addSurvivor(formValue).subscribe(data => {
        this.newSurvivor = data;
        console.log('newSurvivor:', this.newSurvivor);
        this.emitSurvivorsUpdate();
        this.addSurvivorForm.reset();
      }, error => {
        console.log('DEU PAU!:', error);
      });
    }
  }

  emitSurvivorsUpdate() {
    this.updatedSurvivorList.emit();
  }

  // increaseItemCount(e) {
  //   const el = e.srcElement;
  //   const controlName = $(el).prev().attr('formControlName');
  //   let value = $(el).prev().val();
  //   value++;
  //   $(el).prev().val(value)
  //   console.log(value)
  //   this.updatedInputValue = value;
  // }


}
