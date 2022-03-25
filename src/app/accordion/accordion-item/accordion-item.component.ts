import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent implements OnInit {

  @Input() title: string;
  showBody = false;

  constructor() { }

  ngOnInit() {

  }

  toggle() {
    this.showBody = !this.showBody;
  }
}