import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table/table.component';
import { ElementComponent } from './element/element.component';
import { ElementPositionDirective } from './directives/element-position.directive';

import { TablePeriodicServiceService } from './services/table-periodic-service';
import { ElementRadiusDirective } from './directives/element-radius.directive';
import { GroupElementsComponent } from './group-elements/group-elements.component';
import { ViewElementComponent } from './view-element/view-element.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TableComponent,
    ElementComponent,
    ElementPositionDirective,
    ElementRadiusDirective,
    GroupElementsComponent,
    ViewElementComponent
  ],
  exports: [
    TableComponent
  ],
  providers: [
    TablePeriodicServiceService
  ]
})
export class PeriodicTableModule { }
