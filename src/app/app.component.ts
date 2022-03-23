import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

  public movies: string[];

  ngOnInit() {
    this.movies = [
      'Blade Runner',
      'Cool Hand Luke',
      'Heat',
      'Juice',
      'The Far Side of the World',
      'Morituri',
      'Napoleon Dynamite',
      'Pulp Fiction'
    ];
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}