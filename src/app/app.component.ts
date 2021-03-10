import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']//[] arrayi ifade etmekte
})
export class AppComponent {
  title: string = 'northwind';
  user: string = "Ayhan Yıldız"
  
}
