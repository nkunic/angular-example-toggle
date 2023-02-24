import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  isFavorite: boolean;

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }

}
