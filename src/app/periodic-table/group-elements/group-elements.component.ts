import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: '[group-elements]',
  templateUrl: './group-elements.component.html',
  styleUrls: ['./group-elements.component.scss']
})
export class GroupElementsComponent implements OnInit {
  @Input() groupsElements: Array<any>;
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
    this.groupSelectElementEvent([{name: '', color: ''}]);
  }

  /**
   * toggle group
   * 
   * @param {Array<any>} group 
   * @memberof GroupElementsComponent
   */
  groupSelectElementEvent(group: Array<any>):void {
    if(this.groupSelectElement == group) {
      this.groupSelectElement = [{name: '', color: ''}];
    } else {
      this.groupSelectElement = group;
    }

    this.groupSelectEmitter.emit(this.groupSelectElement);
  }
}
