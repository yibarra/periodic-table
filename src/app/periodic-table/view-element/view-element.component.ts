import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[view-element]',
  templateUrl: './view-element.component.html',
  styleUrls: ['./view-element.component.scss']
})
export class ViewElementComponent implements OnInit {
  @Input() elementData: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  
}
