import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Movie } from './Interface/Movie';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

  public movies: Movie[];

  ngOnInit() {
    this.movies = [
      { name: 'Blade Runner', category: 1 },
      { name: 'Cool Hand Luke', category: 2 },
      { name: 'Heat', category: 3 },
      { name: 'Juice', category: 4 },
    ];
  }
  moviesWatched = [ ];
  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.movies, event.previousIndex, event.currentIndex);      
    }
    else {
      transferArrayItem(event.previousContainer.data,
        event.container.data, event.previousIndex,
        event.currentIndex);
    }
  }
}
