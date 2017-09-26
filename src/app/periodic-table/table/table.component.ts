import { element } from 'protractor';
import { Component, OnInit, ElementRef } from '@angular/core';

import { Element } from './../../shared/element.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { animate, query, trigger, stagger, state, style, transition } from '@angular/animations';

import { TablePeriodicServiceService } from './../services/table-periodic-service';

@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public elementData: Element;
  public elements: Array<Element> = [];
  public groupsElements: Array<any>;
  public groupSelect: Array<any> = null;
  public table: any = null;
  public typeElements: string = 'normal';

  constructor(private _periodicService: TablePeriodicServiceService, private _element: ElementRef) { }

  ngOnInit() {
    this._periodicService.getAll().subscribe(items => {
      if(items.length > 0) {
        this.elements = items;

        this._periodicService.getGroupBlocks().subscribe(groups => {
          this.groupsElements = groups;
          this.groupSelect = this.groupsElements[this.groupsElements.length - 1];
        });
      }
    });
  }

  onGroup(event: Array<any>):void {
    this.groupSelect = event;
  }

  onElement(event: Element):void {
    if(event.hasOwnProperty('atomicNumber')) {
      this.elementData = event;
    }
  }

  onResize(event) {
    if (event.target.innerWidth < 1170) {
      console.log('resize', this.elements);
    } else {
      console.log('normal');
    }
  }

  typeView(type: string = 'normal'): void {
    this.typeElements = type;

    if(this.typeElements === 'normal') {
      this._periodicService.getGroupBlocks();
    }
  }
}
