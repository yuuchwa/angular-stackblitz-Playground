import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule ({
  declarations: [AccordionComponent, AccordionItemComponent],
  imports: [
    CommonModule
  ],
  exports: [AccordionComponent, AccordionItemComponent]
})
export class AccordionModule{

}