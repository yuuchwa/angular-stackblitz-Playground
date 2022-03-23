import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  itemTemplates = [
    { id: 1, name: "peter"},
    { id: 2, name: "Sandro"},
    { id: 3, name: "Niklas"},
    { id: 4, name: "Hans"},
  ]
}
