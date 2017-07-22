import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: '[element]',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {
  @Input() elementData: Array<any>;
  @Input() groupBlock: Array<any>;
  @Input() typeView: string = 'normal';

  public activeGroup: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: any):void {
    
  }
}
