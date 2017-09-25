import { Injectable } from '@angular/core';

import { periodicTable } from './table-periodic';
import { Element } from './../../shared/element.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TablePeriodicServiceService {
  elements: FirebaseListObservable<Element[]> = null;
  element: FirebaseListObservable<Element> = null;

  /**
   * Creates an instance of TablePeriodicServiceService.
   * @param {AngularFireDatabase} db 
   * @memberof TablePeriodicServiceService
   */
  constructor(public db: AngularFireDatabase) {}

  /**
   * get all elements
   * @returns {FirebaseListObservable<Element[]>} 
   * @memberof TablePeriodicServiceService
   */
  getAll():FirebaseListObservable<Element[]> {
    return this.db.list('/elements');
  }

  /**
   * get element by id
   * @param {number} id 
   * @returns {FirebaseListObservable<object>} 
   * @memberof TablePeriodicServiceService
   */
  getElementById(id: number): FirebaseListObservable<object> {
    return this.db.list('/elements', {
      query: {
        orderByChild: "atomicNumber",
        equalTo: id
      }
    });
  }

  /**
   * get element by name
   * @param {string} [name='Lithium'] 
   * @returns {FirebaseListObservable<object>} 
   * @memberof TablePeriodicServiceService
   */
    getElementByName(name: string = 'Lithium'): FirebaseListObservable<object> {
      return this.db.list('/elements', {
        query: {
          orderByChild: "name",
          equalTo: name
        }
      });
    }
  
  /**
   * get element to block
   * @param {string} [group='nonmetal'] 
   * @returns {FirebaseListObservable<object>} 
   * @memberof TablePeriodicServiceService
   */
  getElementByGroupBlock(group: string = 'nonmetal'): FirebaseListObservable<object> {
    return this.db.list('/elements', {
      query: {
        orderByChild: "groupBlock",
        equalTo: group
      }
    })
  }

  /**
   * get element by symbol
   * @param {string} [symbol='Fe'] 
   * @returns {FirebaseListObservable<object>} 
   * @memberof TablePeriodicServiceService
   */
  getElementBySymbol(symbol: string = 'Fe'): FirebaseListObservable<object> {
    return this.db.list('/elements', {
      query: {
        orderByChild: "symbol",
        equalTo: symbol
      }
    });
  }

  /**
   * get group blocks
   * @returns {FirebaseListObservable<any>} 
   * @memberof TablePeriodicServiceService
   */
  getGroupBlocks(): FirebaseListObservable<any> {
    return this.db.list('/groupBlock');
  }
}
