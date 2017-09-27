import { element } from 'protractor';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Element } from './../../shared/element.model';

@Component({
  selector: '[element]',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent {
  @Input() elementData: Array<any>;
  @Input() active: number;
  @Input() groupBlock: Array<any>;
  @Input() typeView: string = 'normal';

  /**
   * element selected
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
   * hex to rgb
   * @param {string} hex 
   * @param {number} alpha 
   * @returns {string} 
   * @memberof ElementComponent
   */
  hexToRGB(hex: string, alpha: number):string {
    let r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return `rgba(${r},${g},${b},${alpha})`;
    } else {
      return `rgb(${r},${g},${b})`;
    }
}

  /**
   * view element emitter
   * 
   * @param {Array <any>} element 
   * @memberof ElementComponent
   */
  viewElement(element: Element):void {
    if(element && element.hasOwnProperty('atomicNumber')) {
      this.elementSelected.emit(element);
    }
  }
}
