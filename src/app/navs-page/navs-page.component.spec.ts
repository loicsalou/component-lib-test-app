import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavsPageComponent } from './navs-page.component';

describe('NavsPageComponent', () => {
  let component: NavsPageComponent;
  let fixture: ComponentFixture<NavsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
