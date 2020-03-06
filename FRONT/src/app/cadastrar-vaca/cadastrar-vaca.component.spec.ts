import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarVacaComponent } from './cadastrar-vaca.component';

describe('CadastrarVacaComponent', () => {
  let component: CadastrarVacaComponent;
  let fixture: ComponentFixture<CadastrarVacaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarVacaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarVacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
