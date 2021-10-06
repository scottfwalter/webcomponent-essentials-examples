import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myTitle = 'project-angular';
  open = false;

  toggle(event: any) {
    console.log(event);
    this.open = event.detail;
  }
}
