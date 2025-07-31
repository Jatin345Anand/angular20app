import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from './admin/admin';
import { User } from './user/user';
import { Single } from './single/single';
import { DataBinding } from './data-binding/data-binding';
import { NgIfComponent } from './ng-if-component/ng-if-component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // BrowserAnimationsModule,
    // CommonModule,
    Admin, User, Single, DataBinding, NgIfComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practice-app');
}
