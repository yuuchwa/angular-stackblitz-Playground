import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule ({
  declarations: [AccordionComponent, AccordionItemComponent],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [AccordionComponent, AccordionItemComponent]
})
export class AccordionModule{

}