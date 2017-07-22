import { element } from 'protractor';
import { Injectable } from '@angular/core';

import { periodicTable } from './table-periodic';

@Injectable()
export class TablePeriodicServiceService {
  constructor() {}

  /**
   * get all
   * 
   * @returns 
   * @memberof TablePeriodicServiceService
   */
  getAll() {
    return periodicTable;
  }

/**
 * get element by name
 * 
 * @param {string} [name='Lithium'] 
 * @returns {*} 
 * @memberof TablePeriodicServiceService
 */
  getElementByName(name: string = 'Lithium'): any {
    return periodicTable.map((element) => {
      if(element.name == name) {
        return element;
      }
    });
  }
  
  /**
   * get element by group block
   * 
   * @param {string} [group='nonmetal'] 
   * @returns {*} 
   * @memberof TablePeriodicServiceService
   */
  getElementByGroupBlock(group: string = 'nonmetal'): any {
    return periodicTable.map((element) => {
      if(element.groupBlock == group) {
        return element;
      }
    });
  }

  /**
   * Get element by symbol
   * 
   * @param {string} [symbol='Fe'] 
   * @returns {*} 
   * @memberof TablePeriodicServiceService
   */
  getElementBySymbol(symbol: string = 'Fe'): any {
    return periodicTable.map((element) => {
      if(element.symbol == symbol) {
        return element;
      }
    });
  }

  /**
   * Get groups blocks
   * 
   * @returns {*} 
   * @memberof TablePeriodicServiceService
   */
  getGroupBlocks(): any {
    let groups: Array<any> = [];

    for(let element of periodicTable) {
      if(!groups.find((value) => (value.name == element.groupBlock))) {
        groups.push({
          'name': element.groupBlock,
          'color': element.cpkHexColor
        });
      }
    }

    return groups;
  }
}
