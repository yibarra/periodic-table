import { Component, OnInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public table: any = null;
  constructor(private _element: ElementRef) { }

  ngOnInit() {
    this.table = d3.select(this._element.nativeElement.querySelector('#table'));
    this.table.append('circle')
      .attr('fill', 'red')
      .attr('cx', 90)
      .attr('cy', 90)
      .attr('r', 90)
      .on('click', this.preview);
  }

  preview(this: SVGCircleElement) {
    let eventDrag: d3.dragEvent<SVGCircleElement> = event;
    console.log(eventDrag);
  }

  onResize(event) {
    if (event.target.innerWidth < 1170) {
      console.log('resize');
    } else {
      console.log('normal');
    }
  }
}
