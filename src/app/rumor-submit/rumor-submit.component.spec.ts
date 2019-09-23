import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RumorSubmitComponent } from './rumor-submit.component';

describe('RumorSubmitComponent', () => {
  let component: RumorSubmitComponent;
  let fixture: ComponentFixture<RumorSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RumorSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RumorSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
