import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: '[group-elements]',
  templateUrl: './group-elements.component.html',
  styleUrls: ['./group-elements.component.scss']
})
export class GroupElementsComponent implements OnInit {
  /**
   * gorup default
   * 
   * @private
   * @type {Array<any>}
   * @memberof GroupElementsComponent
   */
  private groupDefault: Array<any> = [{id: 'all', name: 'All', color: '#FF0000'}];

  /**
   * group element
   * 
   * @type {Array<any>}
   * @memberof GroupElementsComponent
   */
  @Input() groupsElements: Array<any>;

  /**
   * ouput event
   * 
   * @memberof GroupElementsComponent
   */
  @Output() groupSelectEmitter = new EventEmitter<any>();

  /**
   * group select element
   * 
   * @type {Array<any>}
   * @memberof GroupElementsComponent
   */
  public groupSelectElement: Array<any>;

  /**
   * Creates an instance of GroupElementsComponent.
   * @memberof GroupElementsComponent
   */
  constructor() { }

  /**
   * init
   * 
   * @memberof GroupElementsComponent
   */
  ngOnInit() {
    this.groupSelectElementEvent(this.groupDefault);
  }

  /**
   * group select
   * 
   * @param {Array<any>} group 
   * @memberof GroupElementsComponent
   */
  groupSelectElementEvent(group: Array<any>):void {
    if(this.groupSelectElement == group) {
      this.groupSelectElement = this.groupDefault;
    } else {
      this.groupSelectElement = group;
    }

    this.groupSelectEmitter.emit(this.groupSelectElement);
  }
}
