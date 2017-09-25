import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[element]',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent {
  @Input() elementData: Array<any>;
  @Input() groupBlock: Array<any>;
  @Input() typeView: string = 'normal';

  /**
   * element selected
   * 
   * @memberof ElementComponent
   */
  @Output() elementSelected = new EventEmitter<any>();

  /**
   * active group
   */
  public activeGroup: boolean = false;

  /**
   * Creates an instance of ElementComponent.
   * @memberof ElementComponent
   */
  constructor() { }

  /**
   * view element emitter
   * 
   * @param {Array <any>} element 
   * @memberof ElementComponent
   */
  viewElement(element: Array <any>):void {
    if(element && element.hasOwnProperty('atomicNumber')) {
      this.elementSelected.emit(element);
    }
  }
}
