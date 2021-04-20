import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregadosAddComponent } from './empregados-add.component';

describe('EmpregadosAddComponent', () => {
  let component: EmpregadosAddComponent;
  let fixture: ComponentFixture<EmpregadosAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpregadosAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpregadosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
