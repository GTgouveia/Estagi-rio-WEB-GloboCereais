import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowFilialComponent } from './cow-filial.component';

describe('CowFilialComponent', () => {
  let component: CowFilialComponent;
  let fixture: ComponentFixture<CowFilialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowFilialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowFilialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
