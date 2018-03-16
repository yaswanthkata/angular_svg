import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgpolygonComponent } from './svgpolygon.component';

describe('SvgpolygonComponent', () => {
  let component: SvgpolygonComponent;
  let fixture: ComponentFixture<SvgpolygonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgpolygonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgpolygonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
