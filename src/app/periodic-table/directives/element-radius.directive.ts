import { Directive, Input, HostBinding, ElementRef, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[elementRadius]'
})
export class ElementRadiusDirective {
  @Input() radius: number;

  @HostBinding('style.height.px') radiusElementHeight: number;
  @HostBinding('style.width.px') radiusElementWidth: number;

  constructor(private _element: ElementRef) { }

  ngOnChanges(changes: any):void {
    this.resizeRadius(this.radius);
  }

  resizeRadius(radius: number = 0):void {
    let widthElement = this._element.nativeElement.parentElement.getBoundingClientRect().width;

    this.radiusElementHeight = radius;
    this.radiusElementWidth = radius;
  }
}
