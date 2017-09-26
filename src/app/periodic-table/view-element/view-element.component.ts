import { Component, OnInit, Input } from '@angular/core';
import { Element } from './../../shared/element.model';

@Component({
  selector: '[view-element]',
  templateUrl: './view-element.component.html',
  styleUrls: ['./view-element.component.scss']
})
export class ViewElementComponent implements OnInit {
  @Input() elementData: Element = null;

  constructor() { }

  ngOnInit() {
  }

  
}
