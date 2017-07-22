import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupElementsComponent } from './group-elements.component';

describe('GroupElementsComponent', () => {
  let component: GroupElementsComponent;
  let fixture: ComponentFixture<GroupElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
