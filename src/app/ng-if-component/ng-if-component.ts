import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-component',
  imports: [NgClass, NgStyle],
  templateUrl: './ng-if-component.html',
  styleUrl: './ng-if-component.css',
  animations: [
    trigger('fadeInOut', [
      state('visible', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('hidden => visible', [
        animate('500ms ease-in')
      ]),
      transition('visible => hidden', [
        animate('500ms ease-out')
      ])
    ])
  ]
})
export class NgIfComponent {

  isVisible: boolean = true;
  currentClass: string = 'bg-primary text-white p-3';
  currentColor: string = 'blue';
  isShow3: boolean = false;
  isShow4: boolean = false;

  toggleVisibility(event: any) {
    console.log('Toggle button clicked:', event.target.value);
    // Toggle the visibility state
    if(event.target.value == 'show') {
      this.isVisible = true;
      this.currentClass = 'bg-primary text-white p-3';
      this.currentColor = 'blue';
    } else {
      this.isVisible = false;
      this.currentClass = 'bg-danger text-white p-3';
      this.currentColor = 'red';
    }
    if(event.target.value == '3')   {
      this.isShow3 = true;
    } else {
      this.isShow3 = false;
    }
    if(event.target.value == '4')   {
      this.isShow4 = true;
    } else {
      this.isShow4 = false;
    }
    
    // Uncomment the following lines if you want to toggle visibility based on the button value
    // this.isVisible = event.target.value == 'show' ? true : false;
    // this.currentClass = event.target.value == 'show' ? 'bg-primary text-white p-3' : 'bg-danger text-white p-3';
    // this.isVisible = !this.isVisible;
    console.log('Visibility toggled:', this.isVisible);
  }

  getVisibilityStatus(): string {
    return this.isVisible ? 'Content is visible' : 'Content is hidden';
  }

  constructor() {
    console.log('NgIfComponent initialized with visibility:', this.isVisible);
  }

  ngOnInit() {
    console.log('NgIfComponent ngOnInit called, current visibility:', this.isVisible);
  }
}
