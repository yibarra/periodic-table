import { Component, OnInit, ElementRef } from '@angular/core';
import { animate, query, trigger, stagger, state, style, transition } from '@angular/animations';

import { TablePeriodicServiceService } from './../services/table-periodic-service';

@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('elementsAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-100%)' })
        ], { optional: true }),
        query(':enter', stagger('50ms', [
          animate('50ms ease-out',
            style({ opacity: 1, transform: 'translateY(0)' })
          )
        ]))
      ])
    ])
  ]
})
export class TableComponent implements OnInit {
  public elements: Array<any>;
  public groupsElements: Array<any>;
  public groupSelect: Array<any> = null;
  public table: any = null;
  public typeElements: string = 'normal';

  constructor(private _periodicService: TablePeriodicServiceService, private _element: ElementRef) { }

  ngOnInit() {
    this.elements = this._periodicService.getAll();
    this.groupsElements = this._periodicService.getGroupBlocks();
  }

  onGroup(event: Array<any>):void {
    this.groupSelect = event;
  }

  onResize(event) {
    if (event.target.innerWidth < 1170) {
      console.log('resize');
    } else {
      console.log('normal');
    }
  }

  typeView(type: string = 'normal'): void {
    this.typeElements = type;

    if(this.typeElements === 'normal') {
      this.groupsElements = this._periodicService.getGroupBlocks();
    }
  }
}
