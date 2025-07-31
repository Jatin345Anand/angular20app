import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-component',
  imports: [],
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

  toggleVisibility(event: any) {
    console.log('Toggle button clicked:', event.target.value);
    // Toggle the visibility state
    this.isVisible = event.target.value == 'show' ? true : false;
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
