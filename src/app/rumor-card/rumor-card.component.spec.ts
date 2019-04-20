import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RumorCardComponent } from './rumor-card.component';

describe('RumorCardComponent', () => {
  let component: RumorCardComponent;
  let fixture: ComponentFixture<RumorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RumorCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RumorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
