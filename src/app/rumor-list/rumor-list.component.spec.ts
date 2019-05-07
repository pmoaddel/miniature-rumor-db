import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RumorListComponent } from './rumor-list.component';

describe('RumorListComponent', () => {
  let component: RumorListComponent;
  let fixture: ComponentFixture<RumorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RumorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RumorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
