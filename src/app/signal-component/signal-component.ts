import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-component',
  imports: [],
  templateUrl: './signal-component.html',
  styleUrl: './signal-component.css'
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {

  firstName = signal('JATIN');
  lastName = signal<string>('ANAND');
  FULL_NAME = signal(`${this.firstName()} ${this.lastName()}`);
  courseName: string = 'Angular';

  constructor() {
    // You can update the signals like this
    this.firstName.set('Jatin');
    this.lastName.set('Anand');
    debugger;
    setTimeout(() => {
      // this.firstName.set('Jatin Kumar');
      // this.lastName.set('Anand');
      this.courseName = 'Angular Advanced';
    }, 5000);
    debugger;
  }

  // You can also use methods to get the values
  getFirstName() {
    return this.firstName();
  }

  getLastName() {
    return this.lastName();
  }
}
