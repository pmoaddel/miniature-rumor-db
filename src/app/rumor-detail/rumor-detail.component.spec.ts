import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RumorDetailComponent } from './rumor-detail.component';

describe('RumorDetailComponent', () => {
  let component: RumorDetailComponent;
  let fixture: ComponentFixture<RumorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RumorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RumorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
