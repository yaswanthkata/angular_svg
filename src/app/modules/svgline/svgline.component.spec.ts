import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvglineComponent } from './svgline.component';

describe('SvglineComponent', () => {
  let component: SvglineComponent;
  let fixture: ComponentFixture<SvglineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvglineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvglineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
