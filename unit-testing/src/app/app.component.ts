import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'unit-testing';
  btnText = 'Unit Testing False';
  isTesting = false;
  marks = [5, 50, 66, 70, 90]; // use for Pipes

  onClick() {
    setTimeout(() => {
      this.isTesting = true;
      this.btnText = 'Unit Testing True';
    }, 3000);
  }
}
