import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Movie } from './Interface/Movie';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public moviesCategory: Movie[][];

  ngOnInit() {
    this.moviesCategory = [
      [
        { name: 'Blade Runner', category: 'action' },
        { name: 'Blade Lunner', category: 'action' },
        { name: 'Blade Funner', category: 'action' },
      ],
      [
        { name: 'Cool Hand Luke', category: 'funny' },
        { name: 'Pokemon', category: 'funny' },
        { name: 'Digimon', category: 'funny' },
      ],
      [
        { name: 'Prim', category: 'sad' },
        { name: 'Joker', category: 'sad' },
      ],
      [
        { name: 'Juice', category: 'doku' },
        { name: 'iron Van', category: 'doku' },
        { name: 'Lokshu', category: 'doku' },
        { name: 'Shang shi', category: 'doku' },
      ],
    ];
  }
  moviesWatched = [];
  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        this.moviesCategory,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
