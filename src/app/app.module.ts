import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionModule } from './accordion/accordion.module';
// Import your library

@NgModule({
  imports: [BrowserModule, FormsModule, DragDropModule, AccordionModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
