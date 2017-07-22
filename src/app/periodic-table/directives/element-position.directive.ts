import { Directive, ElementRef, Renderer, Input, HostBinding, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[elementPosition]'
})
export class ElementPositionDirective implements OnInit {
  @Input() xPos: number;
  @Input() yPos: number;

  @HostBinding('style.left.px') styleLeftPosition: number;
  @HostBinding('style.top.px') styleTopPosition: number;

  private xPositionElement: number;

  constructor(private _element: ElementRef) {}

  ngOnInit() {
    this.styleLeftPosition = this.xPosition(this.xPos);
    this.styleTopPosition = this.yPosition(this.yPos);
  }

  /**
   * xPosition element
   * 
   * @param {number} [x=1] 
   * @returns {number} 
   * @memberof ElementPositionDirective
   */
  xPosition(x: number = 1): number {
    return this._element.nativeElement.getBoundingClientRect().width * (x - 1);
  }

  /**
   * yPosition element
   * 
   * @param {number} [y=1] 
   * @returns {number} 
   * @memberof ElementPositionDirective
   */
  yPosition(y: number = 1): number {
    return this._element.nativeElement.getBoundingClientRect().height * (y - 1);
  }
}
