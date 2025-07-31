import { Component } from '@angular/core';

@Component({
  selector: 'app-singleton',
  imports: [],
  template: "<h1 class='text-welcome'>Singleton Component</h1>",
  styles: [`
    .text-welcome {
      font-size: 20px;
      color: blue;
    }
  `]
})
export class Single {

}
