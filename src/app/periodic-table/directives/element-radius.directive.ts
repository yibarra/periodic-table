import { Directive, Input, HostBinding, ElementRef, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[elementRadius]'
})
export class ElementRadiusDirective {
  /**
   * top diference
   * 
   * @type {number}
   * @memberof ElementRadiusDirective
   */
  public diferenceTop: number = 4.5;

  /**
   * radius
   * 
   * @type {number}
   * @memberof ElementRadiusDirective
   */
  @Input() radius: number;

  /**
   * height
   * 
   * @type {number}
   * @memberof ElementRadiusDirective
   */
  @HostBinding('style.height.px') radiusElementHeight: number;

  /**
   * width
   * 
   * @type {number}
   * @memberof ElementRadiusDirective
   */
  @HostBinding('style.width.px') radiusElementWidth: number;

  /**
   * position left
   * 
   * @type {number}
   * @memberof ElementRadiusDirective
   */
  @HostBinding('style.left.px') leftPosition: number;

  /**
   * position top
   * 
   * @type {number}
   * @memberof ElementRadiusDirective
   */
  @HostBinding('style.top.px') topPosition: number;

  /**
   * Creates an instance of ElementRadiusDirective.
   * @param {ElementRef} _element 
   * @memberof ElementRadiusDirective
   */
  constructor(private _element: ElementRef) { }

  /**
   * change
   * 
   * @param {*} changes 
   * @memberof ElementRadiusDirective
   */
  ngOnChanges(changes: any):void {
    this.resizeRadius(this.radius);
  }

  /**
   * resize radius
   * 
   * @param {number} [radius=0] 
   * @memberof ElementRadiusDirective
   */
  resizeRadius(radius: number = 0):void {
    this.radiusElementHeight = radius;
    this.radiusElementWidth = radius;

    if(this.radiusElementWidth > 0) {
      let widthElement = this._element.nativeElement.parentElement.getBoundingClientRect().width;
      let heightElement = this._element.nativeElement.parentElement.getBoundingClientRect().height;

      this.leftPosition = (widthElement / 2) - (this.radiusElementWidth / 2);
      this.topPosition = heightElement - (this.radiusElementHeight / this.diferenceTop);
    }
  }
}
