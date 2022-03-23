import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop/typings/drag-drop-module';
// Import your library

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    DragDropModule
  
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
