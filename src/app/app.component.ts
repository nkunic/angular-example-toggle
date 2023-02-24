import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  isDanger: boolean;

  toggleStatus(): void {
    this.isDanger = !this.isDanger;
  }

}
