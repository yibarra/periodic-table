import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[element]',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {
  @Input() elementData: Array<any>;
  @Input() typeView: string = 'normal';

  constructor() { }

  ngOnInit() {
  }

}
